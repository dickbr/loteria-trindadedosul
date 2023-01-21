import { styled } from '../../styles/index';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '0 2rem',
  alignItems: 'center',
  poition: 'relative',
  '>img': {
    position: 'absolute',
    maxWidth: '-webkit-fill-available',
    maxHeight: '-webkit-fill-available',
    zIndex: '-1'
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  marginTop: '3rem'
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});
