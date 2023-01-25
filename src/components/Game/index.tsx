import Image from 'next/image';
import React from 'react';

import trevo from '../../assets/images/trevo.png';
import trevoVerde from '../../assets/images/trevoVerde.png';

import { Container, Content, Wrapper } from './styles';

type GameProps = {
  name: string;
  value: string;
  color: string;
};

export const Game: React.FC<GameProps> = ({ name, color, value }) => {
  return (
    <Container css={{ background: `${color}` }}>
      <Image
        src={name.toLowerCase() === 'timemania' ? trevoVerde : trevo}
        alt="Trevo"
        width={55}
        priority
      />

      <Content>
        <Wrapper>
          <p
            style={{
              color: name.toLowerCase() === 'timemania' ? '#029734' : '#fff'
            }}
          >
            {name}
          </p>

          <p
            style={{
              color: name.toLowerCase() === 'timemania' ? '#029734' : '#fff'
            }}
          >
            {value}
          </p>
        </Wrapper>
        <hr
          style={{
            color: name.toLowerCase() === 'timemania' ? '#029734' : '#fff'
          }}
        />
      </Content>
    </Container>
  );
};
