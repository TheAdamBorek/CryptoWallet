import React from "react";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { Provider as PaperProvider } from "react-native-paper";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { ETHAddressProvider } from "./src/persistence/ETHAddressProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <PaperProvider>
          <QueryClientProvider client={queryClient}>
            <ETHAddressProvider>
              <AppNavigator />
            </ETHAddressProvider>
          </QueryClientProvider>
        </PaperProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
