import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button className="btn">Hello World!</button>
      </main>
    </>
  );
};

export default Home;
