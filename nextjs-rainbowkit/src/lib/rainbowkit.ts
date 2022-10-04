import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';

export const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.rinkeby]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: 'QZScWh5Dxk2PGMTw3IFLI0XcZvskklD8',
    }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export const theme = darkTheme();

export const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  // 全角不可
  statement: 'This is custom messege!! You can change at src/lib/rainbowkit.ts',
});
