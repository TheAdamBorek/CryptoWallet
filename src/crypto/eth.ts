import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";

export const provider = new ethers.providers.EtherscanProvider("sepolia");
export const wallet = ethers.Wallet.createRandom(provider);
