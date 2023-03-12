import { View } from "react-native";
import React, { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Screen: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>{children}</View>
  );
};
