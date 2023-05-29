import ImageNext from 'next/image';
import { styled } from '../../styles';

export const Container = styled('div', {
  height: '100vh',
  zIndex: 1,
  position: 'relative',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const Main = styled('main', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '1280px',
  padding: '59px 30px',
  flex: 1
});

export const Footer = styled('footer', {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto'
});

export const Article = styled('article', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Image = styled(ImageNext, {
  position: 'absolute',
  opacity: 0.5,
  left: -25,
  bottom: 0,
  zIndex: -1
});

export const Section = styled('section', {
  gap: 40,
  marginRight: 60,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  h2: {
    marginBottom: 20
  }
});

export const DozenTr = styled('tr', {
  display: 'flex',
  justifyContent: 'center',
  '&+tr': {
    marginTop: 18
  }
});

export const DozenTd = styled('td', {
  '&+td': {
    marginLeft: 18
  }
});
