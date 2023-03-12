import { ethers } from "ethers";
export type Wallet = ethers.Wallet;
const provider = new ethers.providers.EtherscanProvider("sepolia");
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
    return wallet.connect(provider);
  } catch (error) {
    throw error;
  }
};
