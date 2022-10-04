import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <ConnectButton />
      <ConnectButton chainStatus="name" />
      <ConnectButton chainStatus="icon" />
      <ConnectButton chainStatus="none" />
      <ConnectButton accountStatus="avatar" />
      <ConnectButton accountStatus="address" />
      <ConnectButton showBalance={true} />
      <ConnectButton showBalance={false} />
      <ConnectButton label="Hello" />
    </main>
  );
};

export default Home;
