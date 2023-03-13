import { StyleProp, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Screen: React.FC<
  PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
  }>
> = ({ children, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[style, { flex: 1, paddingBottom: insets.bottom }]}>
      {children}
    </View>
  );
};
