import { styled } from '../../styles';

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
  padding: '50px 0'
});

export const Body = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginTop: '10rem',
  marginBottom: '2rem',
  paddingTop: '70px',
  '@media only screen and (max-width: 1919px)': {
    fontSize: '10rem',
    marginTop: '8rem'
  }
});

export const Currency = styled('span', {
  fontSize: '6rem',
  fontWeight: 900,
  marginRight: '10px',
  '@media only screen and (max-width: 1919px)': {
    fontSize: '4rem'
  }
});

export const Value = styled('h1', {
  fontSize: '17rem',
  fontWeight: 900,
  fontFamily: '$default',
  '@media only screen and (max-width: 1919px)': {
    fontSize: '11rem'
  }
});

export const AccumulatedValueText = styled('h1', {
  fontSize: '8rem',
  fontWeight: 900,
  fontFamily: '$default',
  textTransform: 'lowercase',
  verticalAlign: 'text-bottom',
  height: '8rem'
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h2: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'center'
  },
  '@media only screen and (min-width: 1921px)': {
    width: '62%'
  },
  span: {
    textAlign: 'center',
    fontSize: '$3xl',
    fontWeight: 'bold',
    '@media only screen and (min-height: 721px)': {
      fontSize: '$5xl'
    }
  }
});
