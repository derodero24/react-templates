import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { getAuthOptions } from './api/auth/[...nextauth]';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await unstable_getServerSession(req, res, getAuthOptions(req)),
    },
  };
};

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
