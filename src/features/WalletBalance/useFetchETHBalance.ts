import { sepoliaProvider } from "../../crypto/eth";
import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";

export const useFetchETHBalance = (address?: string | null) => {
  return useQuery({
    queryKey: ["fetchETHBalance", address],
    enabled: address != undefined,
    queryFn: () => {
      if (address) return fetchBalance(address);
      else return Promise.reject();
    },
  });
};

const fetchBalance = async (account: string) => {
  const balance = await sepoliaProvider.getBalance(account);
  return balance.div(BigNumber.from("10").pow(14)).toNumber() / 10000;
};
