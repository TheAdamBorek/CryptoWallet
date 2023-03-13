import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import {
  ETHAddressContextValue,
  Provider as PublicKeyContextProvider,
} from "./ETHAddressContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageKey = "ethAddress";

export const ETHAddressProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [address, setAddress] = useState<string>();

  const contextValue = useMemo<ETHAddressContextValue>(
    () => ({
      address: address,
      setAddress: async (publicKey) => {
        setAddress(publicKey);
        await AsyncStorage.setItem(AsyncStorageKey, publicKey);
      },
    }),
    [address, setAddress]
  );

  useEffect(() => {
    async function loadAddress() {
      const key = await AsyncStorage.getItem(AsyncStorageKey).catch(() => null);
      setAddress(key ?? undefined);
    }
    loadAddress();
  }, [setAddress]);

  return (
    <PublicKeyContextProvider value={contextValue}>
      {children}
    </PublicKeyContextProvider>
  );
};
