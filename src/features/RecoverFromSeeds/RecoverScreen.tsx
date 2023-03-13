import React, { useEffect, useRef, useState } from "react";
import { RecoverFromSeeds } from "./RecoverFromSeeds";
import PagerView from "react-native-pager-view";
import { View } from "react-native";
import { ethers } from "ethers";
import { EncryptWallet } from "./EncryptWallet";

export const RecoverScreen: React.FC<{}> = () => {
  const [wallet, setWallet] = useState<ethers.Wallet | undefined>();
  const pagerRef = useRef<PagerView>(null);
  useEffect(() => {
    const randomWallet = ethers.Wallet.createRandom();
    setWallet(randomWallet);
    pagerRef.current?.setPage(1);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        initialPage={1}
        ref={pagerRef}
        style={{ flex: 1 }}
        scrollEnabled={false}
      >
        <RecoverFromSeeds
          setWallet={(wallet) => {
            setWallet(wallet);
            pagerRef.current?.setPage(1);
          }}
        />
        <EncryptWallet wallet={wallet} />
      </PagerView>
    </View>
  );
};
