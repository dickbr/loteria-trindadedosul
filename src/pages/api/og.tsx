/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge'
};

// eslint-disable-next-line import/no-anonymous-default-export, func-names
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="https://www.abiu.com.br/assets/img/inc/apple-touch-icon-180x180.png"
          alt="Logo Abiu"
        />
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}
