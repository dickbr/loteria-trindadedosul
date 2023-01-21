import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      violet500: '#8C3775',
      quina: '#45318f',
      lotofacil: '#bf288a',
      lotomania: '#ff9505',
      supersete: '#94c23c',
      timemania: '#feee01',
      timemaniaTexto: '#029734',
      duplasena: '#ba0029',
      diadesorte: '#c6a104',
      megasena: '#029734',
      federal: '#0157a6',
      segunda: '#004aad',
      terca: '#008037',
      quarta: '#ff0099',
      quinta: '#22073d',
      sexta: '#ff5c00'
    },
    fonts: {
      default: 'Roboto, sans-serif',
      robotoFlex: 'Roboto Flex, sans-serif'
    },
    fontSizes: {
      md: '1rem',
      l: '1.75rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.25rem',
      '6xl': '3.5rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '5rem'
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  }
  // media: {
  //   bp1: 'screen and (min-width: 1030px)', // de 1030 a 1285
  //   bp2: 'screen and (min-width: 1285px)', // de 1285 a 1366
  //   bp3: 'screen and (min-width: 1367px)', // de 1367 a 1440
  //   bp4: 'screen and (min-width: 1441px)' // de 1441 a ...
  // }
});
