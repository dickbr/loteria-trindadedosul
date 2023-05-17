import { styled } from '../../styles';

const Root = styled('table', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 3,
  borderCollapse: 'collapse'
});

const THead = styled('thead', {
  display: 'flex',
  width: '100%',
  flex: 1
});

const TBody = styled('tbody', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 3
});

const Tr = styled('tr', {
  display: 'flex',
  flex: 1,
  gap: 3
});

const Th = styled('th', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  background: '$white',
  fontSize: '$xl',
  color: '$violet500',
  fontWeight: '$bold'
});

const Td = styled('td', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  background: '$white',
  fontSize: '$xl',
  color: '$violet500'
});

export const Table = { Root, THead, TBody, Td, Th, Tr };
