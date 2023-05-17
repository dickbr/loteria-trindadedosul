import { styled } from '../../../styles';

export const PillContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  'div + div': {
    marginTop: 15
  }
});

export const PillContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$2xl',
  span: {
    marginRight: 25
  }
});

export const Pill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '99999px',
  background: '#fff',
  padding: '1rem',
  fontSize: '$3xl',
  fontWeight: 'bold',
  width: '400px'
});
