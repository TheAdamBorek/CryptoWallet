import React from "react";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { Provider as PaperProvider } from "react-native-paper";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { ETHAddressProvider } from "./src/persistence/ETHAddressProvider";

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <PaperProvider>
          <ETHAddressProvider>
            <AppNavigator />
          </ETHAddressProvider>
        </PaperProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
