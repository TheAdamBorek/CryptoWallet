import React, { useContext } from "react";

export type ETHAddressContextValue = {
  address?: string;
  setAddress: (key: string) => Promise<void>;
};

const ETHAddressContext = React.createContext<
  ETHAddressContextValue | undefined
>(undefined);

export const Provider = ETHAddressContext.Provider;
export const useETHAddressContext = (): ETHAddressContextValue => {
  const value = useContext(ETHAddressContext);
  if (value == undefined)
    throw new Error(
      "Cannot get value for 'ETHAddressContext'. Make sure your component is wrapped within a Provider"
    );
  return value;
};
