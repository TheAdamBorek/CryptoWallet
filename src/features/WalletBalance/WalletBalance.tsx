import React from "react";
import { Screen } from "../../components/Screen";
import { useETHAddressContext } from "../../persistence/ETHAddressContext";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { Pressable, View } from "react-native";
import { useFetchETHBalance } from "./useFetchETHBalance";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-root-toast";
import { sepoliaProvider } from "../../crypto/eth";

export const WalletBalance: React.FC<{}> = ({}) => {
  const { address } = useETHAddressContext();
  const { data: balance, isFetching, refetch } = useFetchETHBalance(address);

  const copyAddressToPastebin = async () => {
    await Clipboard.setStringAsync(address ?? "");
    Toast.show("Address copied!", { duration: Toast.durations.SHORT });
  };

  return (
    <Screen style={{ alignItems: "center" }}>
      <Text style={{ marginTop: 32 }}>
        Using{" "}
        <Text style={{ fontWeight: "bold" }}>
          {sepoliaProvider.network.name}
        </Text>{" "}
        network!
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row-reverse",
            marginHorizontal: 16,
            flexWrap: "wrap",
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Text variant={"titleMedium"}>Balance</Text>
            {isFetching ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text variant={"titleLarge"}>{balance} ETH</Text>
            )}
          </View>
          <Pressable onPress={() => copyAddressToPastebin()}>
            <View>
              <Text variant={"bodyLarge"}>Address:</Text>
              <Text>{address}</Text>
            </View>
          </Pressable>
        </View>
        <Button
          style={{ marginTop: 50 }}
          mode={"outlined"}
          onPress={() => refetch()}
        >
          Refresh
        </Button>
      </View>
    </Screen>
  );
};
