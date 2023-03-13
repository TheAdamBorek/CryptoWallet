import { ethers } from "ethers";
import config from "./config.json";
export type Wallet = ethers.Wallet;
export const sepoliaProvider = new ethers.providers.EtherscanProvider(
  "sepolia",
  config.etherscan.apikey
);
/**
 * May **throws**
 * @param words - 12 mnemonic words
 */
export const tryToRecoverWalletFromMnemonic = async (
  words: string[]
): Promise<Wallet> => {
  if (words.length !== 12) {
    throw new Error(
      `Wallet can be recovered from 12 words. ${words.length} were provided`
    );
  }
  const preparedWords = words.map((word) => word.trim().toLowerCase());
  try {
    const wallet = ethers.Wallet.fromMnemonic(preparedWords.join(" "));
    return wallet.connect(sepoliaProvider);
  } catch (error) {
    throw error;
  }
};
