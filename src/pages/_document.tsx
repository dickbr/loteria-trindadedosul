import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,900;8..144,1000&family=Rubik+Mono+One&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: getCssText()
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
