import { styled } from '../../../styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '2rem',

  h1: {
    fontSize: '$9xl',
    color: '$white',
    textTransform: 'uppercase',
    fontFamily: '$default',
    fontWeight: 900
  },
  h2: {
    fontSize: '$l',
    fontWeight: 'bold',
    color: '$white',
    textTransform: 'uppercase',
    textAlign: 'end'
  }
});
