import { styled } from '../..';

export const Header = styled('header', {
  display: 'flex',
  flex: 1,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  background: '$violet500',
  padding: 20
});

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '$violet500',
  flex: 1,
  height: '100vh',
  padding: 20,

  article: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    gap: 20,
    a: {
      textDecoration: 'none',
      color: '$white',
      fontSize: '$3xl',
      transition: 'all 150ms ease-in-out',
      ' &:hover': {
        color: '#471646'
      }
    }
  }
});
