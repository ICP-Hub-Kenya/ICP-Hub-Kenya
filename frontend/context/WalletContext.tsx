import React, { createContext, useContext, useState } from 'react';

type WalletContextType = {
  isWalletConnected: boolean;
  setIsWalletConnected: (status: boolean) => void;
};

const WalletContext = createContext<WalletContextType>({
  isWalletConnected: false,
  setIsWalletConnected: () => {},
});

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  const updateWalletStatus = (status: boolean) => {
    console.log("Updating wallet status to:", status);
    setIsWalletConnected(status);
  };

  return (
    <WalletContext.Provider value={{ isWalletConnected, setIsWalletConnected: updateWalletStatus }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
