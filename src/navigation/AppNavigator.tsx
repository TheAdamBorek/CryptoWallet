import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoverFromSeedsContainer } from "../features/RecoverFromSeeds/RecoverFromSeedsContainer";

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
        component={RecoverFromSeedsContainer}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
