import React, { useState } from "react";
import { Wallet } from "ethers";
import { View } from "react-native";
import { Screen } from "../../components/Screen";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { isEmptyText } from "../../utils/text";
import Toast from "react-native-root-toast";
import { useETHAddressContext } from "../../persistence/ETHAddressContext";
import { persistPrivateKey } from "../../persistence/privateKey";

export const EncryptWallet: React.FC<{
  wallet?: Wallet;
}> = ({ wallet }) => {
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  const [isEncrypting, setIsEncrypting] = useState(false);

  const { setAddress } = useETHAddressContext();

  const encryptWallet = async () => {
    if (wallet == undefined) return;
    if (password == undefined) return;
    setIsEncrypting(true);
    try {
      await persistPrivateKey(wallet.privateKey, password);
      await setAddress(wallet.address);
    } catch (error) {
      console.error(error);
    }
    setIsEncrypting(false);
    Toast.show("Did recover a wallet!");
  };

  const isButtonEnabled =
    !isEncrypting &&
    !isEmptyText(password) &&
    password === passwordConfirmation;
  const showingPasswordNotMatchingError =
    !isEmptyText(passwordConfirmation) && password !== passwordConfirmation;

  return (
    <Screen>
      <View style={{ margin: 16 }}>
        <View style={{ gap: 16 }}>
          <Text>
            To proceed with the app we need to secure your private key. Please
            provide a password.{" "}
          </Text>
          <Text>
            Remember that password as you are going to need it when sending a
            transaction.
          </Text>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            value={password}
            label={"Password"}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <View>
            <TextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              error={showingPasswordNotMatchingError}
              value={passwordConfirmation}
              label={"Confirm Password"}
              secureTextEntry={true}
              onChangeText={setPasswordConfirmation}
            />
            <HelperText
              type="error"
              padding="none"
              visible={showingPasswordNotMatchingError}
            >
              Error: Passwords are not matching.
            </HelperText>
          </View>
        </View>
        <View style={{ gap: 16 }}>
          <Button
            loading={isEncrypting}
            disabled={!isButtonEnabled}
            contentStyle={{ height: 44 }}
            mode={"contained"}
            onPress={encryptWallet}
          >
            Confirm
          </Button>
        </View>
      </View>
    </Screen>
  );
};
