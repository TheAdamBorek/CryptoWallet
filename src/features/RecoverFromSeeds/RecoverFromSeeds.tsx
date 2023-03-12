import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput as RNTextInput,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { tryToRecoverWalletFromMnemonic, Wallet } from "../../crypto/eth";
import Toast from "react-native-root-toast";
import { Screen } from "../../components/Screen";
import { Button, Text, TextInput } from "react-native-paper";

export const RecoverFromSeeds: React.FC<{
  setWallet: (wallet: Wallet) => void;
}> = ({ setWallet }) => {
  const [seeds, setSeeds] = useState<string[]>(Array(12).fill(""));
  const [isDecrypting, setIsDecrypting] = useState(false);
  const inputRefs = Array.from({ length: 12 }).map(() =>
    useRef<RNTextInput>(null)
  );
  const scrollViewRef = useRef<ScrollView>(null);
  const headerHeight = useHeaderHeight();
  const isButtonEnabled =
    !isDecrypting && seeds.findIndex((s) => s.trim() === "") === -1;

  const scrollToNextInput = (index: number) => {
    if (index < inputRefs.length) inputRefs[index].current?.focus();
    else scrollViewRef.current?.scrollToEnd();
  };

  const tryToRecover = async () => {
    setIsDecrypting(true);
    try {
      const wallet = await tryToRecoverWalletFromMnemonic(seeds);
      Toast.show("Successfully recovered a wallet!");
      setWallet(wallet);
    } catch (e) {
      if (e instanceof Error) {
        Toast.show(`Error: ${e.message}`, { duration: Toast.durations.LONG });
      }
    }
    setIsDecrypting(false);
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ marginHorizontal: 16, marginTop: 16 }}
            variant="titleMedium"
          >
            To recover your ETH account please provide your 12 words
          </Text>
          {seeds.map((seed, index) => (
            <TextInput
              key={index}
              autoCapitalize={"none"}
              autoCorrect={false}
              ref={inputRefs[index]}
              style={{ width: "90%", height: 50 }}
              value={seed}
              label={`Seed no ${index + 1}`}
              onChangeText={(text) => {
                setSeeds((seeds) => {
                  const copy = [...seeds];
                  copy[index] = text;
                  return copy;
                });
              }}
              onSubmitEditing={() => {
                scrollToNextInput(index + 1);
              }}
            />
          ))}
          <Button
            loading={isDecrypting}
            disabled={!isButtonEnabled}
            onPress={tryToRecover}
            mode={"contained"}
          >
            Recover
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};
