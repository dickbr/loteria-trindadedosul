import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  flex: 1,
  background: '$orange500',
  borderRadius: '40px',
  padding: '0.7rem',
  gap: '1rem'
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
    fontSize: '$8xl',
    fontWeight: 900,
    fontStyle: 'italic',
    '&:nth-child(2)': {
      fontStyle: 'normal',
      fontFamily: '$robotoFlex',
      fontSize: '$6xl'
    }
  }
});
