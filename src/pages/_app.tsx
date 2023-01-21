import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { globalStyles } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
};

export default App;
