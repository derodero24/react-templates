import '../styles/global.css';

import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { WagmiConfig } from 'wagmi';

import {
  chains,
  getSiweMessageOptions,
  theme,
  wagmiClient,
} from '../lib/rainbowkit';

import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitSiweNextAuthProvider
            getSiweMessageOptions={getSiweMessageOptions}
          >
            <RainbowKitProvider chains={chains} theme={theme}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </WagmiConfig>
      </SessionProvider>{' '}
    </ThemeProvider>
  );
}

export default MyApp;
