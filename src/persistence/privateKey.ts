import { encrypt } from "../crypto/crypto";
import * as SecureStore from "expo-secure-store";

export async function persistPrivateKey(privateKey: string, password: string) {
  const encryptedWallet = encrypt(privateKey, password);
  await SecureStore.setItemAsync("wallet", encryptedWallet);
}
