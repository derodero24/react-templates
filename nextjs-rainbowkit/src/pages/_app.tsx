import '../styles/global.css';

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { WagmiConfig } from 'wagmi';

import { chains, getSiweMessageOptions, wagmiClient } from '../lib/rainbowkit';

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
            <RainbowKitProvider
              chains={chains}
              // PC/ブラウザ全体のテーマ設定に応じて変化
              theme={{
                lightMode: lightTheme(),
                darkMode: darkTheme(),
              }}
              // ウォレット選択時にアイコンが飛び出してくる
              coolMode
            >
              <Component {...pageProps} />
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </WagmiConfig>
      </SessionProvider>{' '}
    </ThemeProvider>
  );
}

export default MyApp;
