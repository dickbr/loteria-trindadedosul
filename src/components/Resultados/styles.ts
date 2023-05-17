import ImageNext from 'next/image';
import { styled } from '../../styles';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 1,
  position: 'relative',
  padding: 10
});

export const Main = styled('main', {
  position: 'relative',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

export const Article = styled('article', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 45
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
