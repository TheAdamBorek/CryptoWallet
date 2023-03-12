import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoverScreen } from "../features/RecoverFromSeeds";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}

type RootStack = {
  recoverFromSeeds: {};
};

const Stack = createNativeStackNavigator<RootStack>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"recoverFromSeeds"}
        options={{
          headerTitle: "Recover",
        }}
        component={RecoverScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
