import React, { useEffect, useState } from 'react';
import { IdentityKitProvider, ConnectWallet, useAgent } from "@nfid/identitykit/react";
import GradientButton from '../../atoms/GradientButton/GradientButton';
import { Principal } from '@dfinity/principal';
import { IcrcLedgerCanister } from "@dfinity/ledger-icrc";
import { useWallet } from '../../../context/WalletContext';
import { IdentityKitAuthType } from '@nfid/identitykit'

const DonateModalContent = ({ onClose }: { onClose: () => void }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { isWalletConnected, setIsWalletConnected } = useWallet(); 
  const agent = useAgent();

  useEffect(() => {
    console.log("DonateModal wallet status:", isWalletConnected);
  }, [isWalletConnected]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDonation = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    console.log("Agent is:", agent);
    console.log("Is wallet connected:", isWalletConnected);
  
    if (!agent || !isWalletConnected) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
      return;
    }
  
    try {
      const ledger = IcrcLedgerCanister.create({
        agent,
        canisterId: Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai")
      });

      // Convert amount to proper decimals (8 for ICP)
      const amountInE8s = Math.floor(Number(amount) * 100000000);
  
      const transferParams = {
        to: {
          owner: Principal.fromText("nrvio-ln3f4-w4gjy-wkrgl-llkdn-us6bp-u4dnf-lnquu-dqpog-hnhvd-tae"),
          subaccount: [] as [] | [Uint8Array]
        },
        amount: BigInt(amountInE8s),
        fee: undefined,
        memo: undefined,
        created_at_time: undefined
      };    
  
      const blockHeight = await ledger.transfer(transferParams);
      setSuccess(`Transfer successful! Block height: ${blockHeight}`);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Transfer failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };  

  // All your existing state and handlers
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Donate to ICP Hub Kenya</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        
        <div className="space-y-4">
            <div className="flex space-x-4 justify-center">  {/* Added justify-center */}
                <GradientButton 
                    className={`p-2 border rounded ${selectedOption === 'crypto' ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => setSelectedOption('crypto')}
                >
                    Donate Crypto
                </GradientButton>
            </div>

            {selectedOption === 'crypto' && (
                <div className="space-y-4 flex flex-col items-center">
                    <div className="flex space-x-2 justify-center">
                      <GradientButton 
                          className="p-2 border rounded"
                          onClick={() => setSelectedOption('ICP')}
                      >
                          ICP
                      </GradientButton>
                      <GradientButton 
                          className="p-2 border rounded opacity-50 relative"
                          onClick={() => setShowTooltip('ckBTC')}
                          onMouseEnter={() => setShowTooltip('ckBTC')}
                          onMouseLeave={() => setShowTooltip(null)}
                      >
                          ckBTC
                          {showTooltip === 'ckBTC' && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded text-sm">
                                  Not supported for now
                              </div>
                          )}
                      </GradientButton>

                      <GradientButton 
                          className="p-2 border rounded opacity-50 relative"
                          onClick={() => setShowTooltip('ckUSDC')}
                          onMouseEnter={() => setShowTooltip('ckUSDC')}
                          onMouseLeave={() => setShowTooltip(null)}
                      >
                          ckUSDC
                          {showTooltip === 'ckUSDC' && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded text-sm">
                                  Not supported for now
                              </div>
                          )}
                      </GradientButton>
                    </div>

                    <div className="flex justify-center">
                      <IdentityKitProvider
                        authType={IdentityKitAuthType.DELEGATION}
                        signerClientOptions={{
                          targets: ["avdd3-5aaaa-aaaal-amrjq-cai"]
                        }}
                        onConnectSuccess={() => setIsWalletConnected(true)}
                        onDisconnect={() => setIsWalletConnected(false)}
                      >
                        <ConnectWallet />
                      </IdentityKitProvider>
                    </div>

                    {isWalletConnected && (
                      <div className="flex flex-col items-center w-full space-y-4">
                        <input
                          type="number"
                          placeholder="Amount"
                          className="w-full max-w-md p-2 border rounded text-center"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          disabled={isLoading}
                        />
                        <GradientButton 
                          onClick={handleDonation}
                          disabled={isLoading || !isWalletConnected}
                          className={isLoading || !isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Processing...</span>
                            </div>
                          ) : 'Donate'}
                        </GradientButton>
                      </div>
                    )}

                </div>
                )}
        </div>

          <button 
            className="absolute top-2 right-2 text-gray-500"
            onClick={onClose}
            >
            ✕
            </button>
      </div>
    </div>
  );
};

const DonateModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <DonateModalContent onClose={onClose} />
  );
};

export default DonateModal;