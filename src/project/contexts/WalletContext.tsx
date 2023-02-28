import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
  goerli,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ReactNode } from "react";

interface WalletProviderInterface {
  children: ReactNode;
}

const WalletProvider = ({ children }: WalletProviderInterface) => {
  const { chains, provider, webSocketProvider } = configureChains(
    [goerli],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY || "",
      }),
      publicProvider(),
    ]
  );

  // Set up client
  const client = createClient({
    autoConnect: false,
    connectors: [
      new MetaMaskConnector({
        chains,
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "Hush Domino",
          jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          // alchemyId:process.env.NEXT_PUBLIC_ALCHEMY_KEY,
          qrcode: false,
        },
      }),
    ],
    provider,
    webSocketProvider,
  });

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WalletProvider;
