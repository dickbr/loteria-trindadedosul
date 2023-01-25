import Image from 'next/image';
import { globalStyles } from '../../styles/global';
import { Game } from '../Game';
import { Title } from './Title';

import bgImage from '../../assets/images/game-day/jogosDoDiaBG.png';

import { Container, Content, Wrapper } from './styles';

type GameDayProps = {
  games: {
    name: string;
    value: string;
    color: string;
  }[];
  color: string;
};

export const GameDay: React.FC<GameDayProps> = ({ games, color }) => {
  globalStyles(color);

  return (
    <Container>
      <Image src={bgImage} alt="Imagem de background" priority />
      <Content>
        <Title />

        <Wrapper>
          {games.map(game => (
            <Game
              key={game.name}
              name={game.name}
              value={game.value}
              color={game.color}
            />
          ))}
        </Wrapper>
      </Content>
    </Container>
  );
};
