import { styled } from '../../../styles';

export const PillContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20
});

export const PillContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 25,
  fontSize: '$2xl'
});

export const Pill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '99999px',
  background: '#fff',
  padding: '1rem',
  fontSize: '$4xl',
  fontWeight: 'bold',
  width: '400px'
});
