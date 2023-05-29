/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from 'react';
import { lighten } from 'polished';
import { ResultadosDataConfig } from '../../../utils';
import { Circle } from '../../Circle';
import { Table } from '../../Table';
import {
  Article,
  Container,
  DozenTd,
  DozenTr,
  Header,
  Image,
  Main,
  Section
} from '../styles';
import { H3, Strong } from '../Texts';
import { Text } from '../../Text';
import { css } from '../../../styles';

type LotomaniaProps = {
  configs: ResultadosDataConfig;
  loteria: string;
  arrayOfDezenas: number[][];
  dataConcurso: string;
  numero_concurso: number;
  valorAcumulado: string;
  nome_mes_sorte?: string | null;
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: string;
  }[];
};

const TextCss = css(Text);

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as="h1"
      size="3xl"
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

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as="h2"
      size="xl"
      fontWheigt="bold"
      css={{
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  );
};

export const Lotomania: React.FC<LotomaniaProps> = props => {
  const {
    loteria,
    dataConcurso,
    numero_concurso,
    valorAcumulado,
    premiacao,
    nome_mes_sorte,
    arrayOfDezenas,
    configs
  } = props;

  return (
    <Container style={{ background: configs.color }}>
      <Header>
        <H1>
          CONCURSO: <Strong>{numero_concurso}</Strong>
          {'\u00A0'} - {'\u00A0'} DATA: <Strong>{dataConcurso}</Strong>
        </H1>
      </Header>

      <Main>
        <Image src={configs.image} alt="Imagem cartela" height={500} />
        <Article>
          <Section>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <H2>
                PRÊMIO ESTIMADO
                <br />
                PRÓXIMO SORTEIO
              </H2>

              <H3>{valorAcumulado}</H3>
            </div>
            {loteria === 'diadesorte' && (
              <span
                style={{
                  textAlign: 'center',
                  textShadow: '1px 1px 2px #000000'
                }}
              >
                <Text as="strong" size="4xl" fontWheigt="bold">
                  MÊS DA SORTE
                </Text>

                <br />

                <Text as="strong" size="4xl" fontWheigt="bold">
                  {nome_mes_sorte}
                </Text>
              </span>
            )}
          </Section>
          <table>
            <tbody>
              {arrayOfDezenas.map((container, index) => (
                <DozenTr key={`${index * 3}`}>
                  {container.map(dezena => (
                    <DozenTd
                      key={dezena}
                      style={{ background: 'none', display: 'block' }}
                    >
                      <Circle
                        css={{
                          color: configs.color,
                          boxShadow: `0px 0px 15px ${lighten(
                            0.3,
                            configs.color
                          )}`
                        }}
                      >
                        {dezena}
                      </Circle>
                    </DozenTd>
                  ))}
                </DozenTr>
              ))}
            </tbody>
          </table>
        </Article>
      </Main>

      <footer>
        <Table.Root>
          <Table.THead>
            <Table.Tr>
              <Table.Th css={{ color: configs.color, fontSize: '$l' }}>
                ACERTOS
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '$l' }}>
                GANHADORES
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '$l' }}>
                PRÊMIO
              </Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {premiacao.map(item => (
              <Table.Tr key={item.valor_total}>
                <Table.Td css={{ color: configs.color, fontSize: '$l' }}>
                  {item.acertos}
                </Table.Td>
                <Table.Td css={{ color: configs.color, fontSize: '$l' }}>
                  {item.quantidade_ganhadores === 0
                    ? 'não houve ganhadores'
                    : item.quantidade_ganhadores}
                </Table.Td>
                <Table.Td css={{ color: configs.color, fontSize: '$l' }}>
                  {item.valor_total}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.TBody>
        </Table.Root>
      </footer>
    </Container>
  );
};
