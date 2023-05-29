import { ReactNode } from 'react';
import { css } from '../../styles';
import { Text } from '../Text';

const TextCss = css(Text);

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as="h1"
      size="xl"
      className={TextCss({
        css: {
          display: 'inherit',
          alignItems: 'center'
        }
      })}
    >
      {children}
    </Text>
  );
};

export const H2 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Text
      as="h2"
      size="l"
      fontWheigt="bold"
      css={{
        textAlign: 'center'
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const H3 = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as="h3"
      size="5xl"
      fontWheigt="bold"
      className={TextCss({
        css: {
          textShadow: '1px 1px 2px #000000'
        }
      })}
    >
      {children}
    </Text>
  );
};

export const Strong = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as="strong"
      size="2xl"
      className={TextCss({
        css: {
          marginLeft: 5
        }
      })}
      fontWheigt="bold"
    >
      {children}
    </Text>
  );
};
