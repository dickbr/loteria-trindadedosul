import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';

import lotomania from '../assets/images/loterias/lotomania.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loteria</title>
      </Head>
      <main style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        <Image src={lotomania} alt="Loteria" fill />
      </main>
    </>
  );
};

export default Home;
