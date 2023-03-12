import React, { useState } from "react";
import { Wallet } from "ethers";
import { View } from "react-native";
import { Screen } from "../../components/Screen";
import { Button, TextInput, Text } from "react-native-paper";

export const EncryptWallet: React.FC<{
  wallet?: Wallet;
}> = ({ wallet }) => {
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

  const isButtonEnabled =
    password?.trim() != "" && password === passwordConfirmation;

  return (
    <Screen>
      <View style={{ margin: 16, gap: 16 }}>
        <Text>
          To proceed with the app we need to secure your private key. Please
          provide a password.{" "}
        </Text>
        <Text>
          Remember that password as you are going to need it when sending a
          transaction.
        </Text>
        <TextInput
          value={password}
          label={"Password"}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          value={passwordConfirmation}
          label={"Confirm Password"}
          secureTextEntry={true}
          onChangeText={setPasswordConfirmation}
        />
        <Button
          disabled={!isButtonEnabled}
          contentStyle={{ height: 44 }}
          mode={"contained"}
        >
          Confirm
        </Button>
      </View>
    </Screen>
  );
};
