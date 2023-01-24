import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  flex: 1,
  background: '$orange500',
  borderRadius: '20px',
  padding: '0.7rem',
  gap: '1rem',
  alignItems: 'center',
  img: {
    width: 55,
    height: 53
  },
  '@media only screen and (min-height: 721px)': {
    img: {
      width: 100,
      height: 96
    },
    borderRadius: '40px',
    gap: '1rem'
  }
});

export const Content = styled('div', {
  display: 'flex',
  width: '100%',
  flex: 1,
  flexDirection: 'column',
  marginRight: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  hr: {
    width: 'inherit',
    borderStyle: 'dashed',
    borderWidth: '2px'
  }
});

export const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',

  p: {
    fontSize: '$2xl',
    fontWeight: 900,
    fontStyle: 'italic',
    '&:nth-child(2)': {
      fontStyle: 'normal',
      fontFamily: '$default',
      fontSize: '$xl'
    },
    '@media only screen and (min-height: 721px)': {
      fontSize: '$8xl',
      '&:nth-child(2)': {
        fontSize: '$6xl'
      }
    }
  }
});
