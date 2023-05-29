/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
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
import { H1, H2, H3, Strong } from '../Texts';
import { Text } from '../../Text';

type DuplaSenaProps = {
  configs: ResultadosDataConfig;
  arrayOfDezenas: string[];
  arrayOfDezenas2: string[];
  dataConcurso: string;
  numero_concurso: number;
  valorAcumulado: string;
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: string;
  }[];
  premiacao2: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: number;
  }[];
};

export const DuplaSena: React.FC<DuplaSenaProps> = props => {
  const {
    dataConcurso,
    numero_concurso,
    valorAcumulado,
    premiacao,
    premiacao2,
    arrayOfDezenas,
    arrayOfDezenas2,
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
          </Section>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
            <div>
              <Text size="4xl" style={{ marginBottom: 20 }}>
                1º Sorteio
              </Text>

              <table>
                <tbody
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 15
                  }}
                >
                  {arrayOfDezenas.map((dezena, index) => (
                    <DozenTr key={`${index * 3}`} style={{ marginTop: 0 }}>
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
                    </DozenTr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <Text size="4xl" style={{ marginBottom: 20 }}>
                2º Sorteio
              </Text>
              <table>
                <tbody
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 15
                  }}
                >
                  {arrayOfDezenas2.map((dezena, index) => (
                    <DozenTr key={`${index * 3}`} style={{ marginTop: 0 }}>
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
                    </DozenTr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Article>
      </Main>

      <footer>
        <Table.Root>
          <Table.THead>
            <Table.Tr>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                ACERTOS
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                GANHADORES
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                PRÊMIO
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                ACERTOS
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                GANHADORES
              </Table.Th>
              <Table.Th css={{ color: configs.color, fontSize: '24px' }}>
                PRÊMIO
              </Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {premiacao.map((item, index) => (
              <Table.Tr key={item.valor_total}>
                <Table.Td css={{ color: configs.color, fontSize: '24px' }}>
                  {item.acertos}
                </Table.Td>
                <Table.Td
                  css={{
                    color: configs.color,
                    fontSize: `${
                      item.quantidade_ganhadores === 0 ? '20px' : '24px'
                    }`
                  }}
                >
                  {item.quantidade_ganhadores === 0
                    ? 'não houve ganhadores'
                    : item.quantidade_ganhadores}
                </Table.Td>
                <Table.Td css={{ color: configs.color, fontSize: '24px' }}>
                  {item.valor_total}
                </Table.Td>

                <Table.Td css={{ color: configs.color, fontSize: '24px' }}>
                  {premiacao2[index].acertos}
                </Table.Td>
                <Table.Td
                  css={{
                    color: configs.color,
                    fontSize: `${
                      item.quantidade_ganhadores === 0 ? '20px' : '24px'
                    }`
                  }}
                >
                  {premiacao2[index].quantidade_ganhadores === 0
                    ? 'não houve ganhadores'
                    : item.quantidade_ganhadores}
                </Table.Td>
                <Table.Td css={{ color: configs.color, fontSize: '24px' }}>
                  {premiacao2[index].valor_total}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.TBody>
        </Table.Root>
      </footer>
    </Container>
  );
};
