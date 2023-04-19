import { styled } from '../../../styles';

export const ContainerTrevos = styled('div', {
  display: 'flex',
  marginTop: 40,
  flexDirection: 'column',
  alignItems: 'center',
  gap: 15,
  span: {
    fontSize: '$4xl'
  }
});

export const ContentTrevos = styled('div', {
  display: 'flex',
  gap: 15,
  fontSize: '$5xl',
  fontWeight: 'bold'
});
