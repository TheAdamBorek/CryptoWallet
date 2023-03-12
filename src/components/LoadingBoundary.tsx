import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

export const LoadingBoundary: React.FC<{
  loading: boolean;
  children: React.ReactElement;
  message?: string;
}> = ({ loading, message, children }) => {
  return loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ActivityIndicator animating={loading} />
      <Text>{message}</Text>
    </View>
  ) : (
    children
  );
};
