import { styled } from '../../styles';

export const Text = styled('p', {
  fontFamily: '$default',
  margin: 0,
  variants: {
    size: {
      md: { fontSize: '$md' },
      l: { fontSize: '$l' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' }
    },
    color: {
      white: { color: '$white' },
      violet500: { color: '$violet500' }
    },
    fontWheigt: {
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'white',
    fontWheigt: 'regular'
  }
});
