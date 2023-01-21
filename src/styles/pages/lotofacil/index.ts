import ImageNext from 'next/image';
import { styled } from '../..';

export const Container = styled('div', {
  height: '100vh',
  display: 'block',
  justifyContent: 'center',
  background: '$violet500',
  zIndex: 1,
  position: 'relative',
  padding: 10
});

export const Main = styled('main', {
  padding: '59px 30px',
  position: 'relative'
});

export const Article = styled('article', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
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
  width: 480,
  left: 0,
  top: -126,
  height: 'auto',
  zIndex: -1
});

export const Section = styled('section', {
  gap: 20,
  marginRight: 60,
  h2: {
    marginBottom: 20
  }
});

export const DozenTr = styled('tr', {
  display: 'flex',
  '&+tr': {
    marginTop: 15
  }
});

export const DozenTd = styled('td', {
  '&+td': {
    marginLeft: 15
  }
});
