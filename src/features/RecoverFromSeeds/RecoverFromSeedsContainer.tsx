import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput as RNTextInput,
  Platform,
} from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useHeaderHeight } from "@react-navigation/elements";
import { LoadingBoundary } from "../../components/LoadingBoundary";
import { Screen } from "../../components/Screen";

export const RecoverFromSeedsContainer: React.FC<{}> = () => {
  const [seeds, setSeeds] = useState<(string | undefined)[]>(
    Array.from({ length: 12 })
  );
  const inputRefs = Array.from({ length: 12 }).map(() =>
    useRef<RNTextInput>(null)
  );
  const headerHeight = useHeaderHeight();

  const tryToFocusInput = (index: number) => {
    if (index + 1 < inputRefs.length) inputRefs[index + 1].current.focus();
  };

  return (
    <Screen>
      <LoadingBoundary loading={false}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={headerHeight}
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
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
                  tryToFocusInput(index);
                }}
              />
            ))}
            <Button mode={"contained"}>Recover</Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </LoadingBoundary>
    </Screen>
  );
};
