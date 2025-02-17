import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { IdentityKitProvider } from "@nfid/identitykit/react"
import { IdentityKitAuthType } from '@nfid/identitykit'
import "@nfid/identitykit/react/styles.css"
import { useWallet, WalletProvider } from '../context/WalletContext'

function MyApp({ Component, pageProps }: AppProps) {
  const { setIsWalletConnected } = useWallet();

  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])

  return (
    <WalletProvider>
      <IdentityKitProvider
        authType={IdentityKitAuthType.DELEGATION}
        signerClientOptions={{
          targets: ["avdd3-5aaaa-aaaal-amrjq-cai"]
        }}
        onConnectSuccess={() => {
          console.log('Connected to wallet');
          setIsWalletConnected(true);
        }}
        onConnectFailure={() => {
          console.log('Connection failed');
          setIsWalletConnected(false);
        }}
        onDisconnect={() => {
          console.log('Disconnected');
          setIsWalletConnected(false);
        }}
      >
        <Component {...pageProps} />
      </IdentityKitProvider>
  </WalletProvider>
  )
}

export default MyApp