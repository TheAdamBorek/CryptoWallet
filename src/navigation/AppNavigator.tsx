import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoverScreen } from "../features/RecoverFromSeeds";
import { useETHAddressContext } from "../persistence/ETHAddressContext";
import { WalletBalance } from "../features/WalletBalance/WalletBalance";
import { View } from "react-native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}

type RootStack = {
  recoverFromSeeds: {};
  wallet: {};
};

const Stack = createNativeStackNavigator<RootStack>();

export const AppNavigator = () => {
  const { address } = useETHAddressContext();

  if (address === undefined) {
    return <View />;
  }

  return (
    <Stack.Navigator>
      {address === null ? (
        <Stack.Screen
          name={"recoverFromSeeds"}
          options={{
            headerTitle: "Recover",
          }}
          component={RecoverScreen}
        />
      ) : (
        <Stack.Screen
          name={"wallet"}
          options={{ headerTitle: "Wallet" }}
          component={WalletBalance}
        />
      )}
    </Stack.Navigator>
  );
};
