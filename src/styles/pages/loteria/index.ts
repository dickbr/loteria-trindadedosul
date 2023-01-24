import { styled } from '../..';

export const Container = styled('div', {
  display: 'flex',
  height: '100vh'
});

export const ImageContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  margin: '0 auto',
  left: 0,
  top: 0,
  overflow: 'hidden',
  zIndex: -1,
  '.image-wrapper': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: '1920px'
  },
  '.left-side': {
    display: 'flex',
    width: '50%',
    height: '100%',
    position: 'absolute',
    left: '0',
    background: 'red'
  },
  '.right-side': {
    display: 'flex',
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: '0',
    background: 'red'
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px 0',
  h2: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
    '@media only screen and (min-height: 721px)': {
      marginBottom: '3rem',
      fontSize: '3rem'
    }
  },
  '@media only screen and (min-width: 1921px)': {
    width: '62%'
  }
});

export const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginTop: '10rem',
  marginBottom: '2rem'
});

export const Value = styled('h1', {
  fontSize: '4rem',
  fontWeight: 900,
  fontFamily: '$default',
  '&:nth-child(1)': {
    fontSize: '8rem'
  },
  '@media only screen and (min-height: 721px)': {
    '&:nth-child(1)': {
      fontSize: '11rem'
    },
    '&:nth-child(2)': {
      fontSize: '7rem'
    }
  }
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  span: {
    textAlign: 'center',
    fontSize: '$3xl',
    fontWeight: 'bold',
    '@media only screen and (min-height: 721px)': {
      fontSize: '$5xl'
    }
  }
});
