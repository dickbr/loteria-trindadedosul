import Image from 'next/image';

import {
  Container,
  Content,
  ImageContainer,
  Body,
  Value,
  Wrapper,
  Currency,
  AccumulatedValueText
} from './styles';

import { LoteriaDataConfig } from '../../utils';

export type LoteriaData = {
  accumulatedValue?: string;
  displayTextAccumulatedValue?: string;
  nextContestNumber?: number;
  nextContestDate?: string;
};

export type LoteriaProps = {
  loteriaData: LoteriaData;
  loteriaDataConfig: LoteriaDataConfig;
};

export const Loteria: React.FC<LoteriaProps> = ({
  loteriaData,
  loteriaDataConfig
}) => {
  return (
    <Container>
      <ImageContainer>
        <div
          className="left-side"
          style={{ background: `${loteriaDataConfig.bgLeft}` }}
        />
        <div
          className="right-side"
          style={{ background: `${loteriaDataConfig.bgRight}` }}
        />
        <div className="image-wrapper">
          <Image src={loteriaDataConfig.image} alt="Background" fill priority />
        </div>
      </ImageContainer>

      <Content>
        <Body>
          <Currency css={{ color: loteriaDataConfig.textColor }}>R$</Currency>
          <Value css={{ color: loteriaDataConfig.textColor }}>
            {loteriaData.accumulatedValue}
          </Value>
        </Body>

        <Wrapper>
          <AccumulatedValueText
            css={{
              color: loteriaDataConfig.textColor
            }}
          >
            {loteriaData.displayTextAccumulatedValue}
          </AccumulatedValueText>
          <h2 style={{ color: loteriaDataConfig.textColor }}>
            compre nossos bolões!
          </h2>
          <span style={{ color: loteriaDataConfig.textColor }}>
            Próximo Concurso: {loteriaData.nextContestNumber}
          </span>
          <span style={{ color: loteriaDataConfig.textColor }}>
            Próximo Sorteio: {loteriaData.nextContestDate}
          </span>
        </Wrapper>
      </Content>
    </Container>
  );
};
