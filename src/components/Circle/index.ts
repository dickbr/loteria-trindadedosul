import { styled } from '../../styles';

export const Circle = styled('div', {
  width: 70,
  height: 70,
  borderRadius: 99999,
  background: '$white',
  fontWeight: '$bold',
  fontSize: '$2xl',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 15px #FE94E1',
  color: '$violet500'
  // '@bp1': {
  //   width: 80,
  //   height: 80,
  //   fontSize: '$4xl'
  // },
  // '@bp2': {
  //   width: 80,
  //   height: 80,
  //   fontSize: '$4xl'
  // },
  // '@bp3': {
  //   width: 95,
  //   height: 95,
  //   fontSize: '$5xl'
  // },
  // '@bp4': {
  //   width: 144,
  //   height: 144,
  //   fontSize: '$8xl'
  // }
});
