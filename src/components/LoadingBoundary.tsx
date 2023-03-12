import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const LoadingBoundary: React.FC<{
  loading: boolean;
  children?: React.ReactElement;
}> = ({ loading, children }) => {
  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator animating={loading} />
    </View>
  ) : (
    children
  );
};
