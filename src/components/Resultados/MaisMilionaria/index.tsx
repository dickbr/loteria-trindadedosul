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
import { ContainerTrevos, ContentTrevos } from './styles';

type MaisMilionariaProps = {
  configs: ResultadosDataConfig;
  arrayOfDezenas: number[][];
  dataConcurso: string;
  numero_concurso: number;
  valorAcumulado: string;
  trevosSorteados: number[];
  premiacao: {
    faixa: number;
    nome: 'string';
    quantidade_ganhadores: number;
    valor_total: number;
  }[];
};

export const MaisMilionaria: React.FC<MaisMilionariaProps> = props => {
  const {
    dataConcurso,
    numero_concurso,
    valorAcumulado,
    premiacao,
    trevosSorteados,
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
          </Section>
          <div style={{ marginTop: '-20px', marginBottom: '-20px' }}>
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

            <ContainerTrevos>
              <span>Trevos Sorteados:</span>
              <ContentTrevos>
                {trevosSorteados.map(trevo => (
                  <Circle
                    key={trevo}
                    css={{
                      width: 70,
                      height: 70,
                      color: configs.color,
                      fontSize: '$l',
                      boxShadow: `0px 0px 15px ${lighten(0.3, configs.color)}`
                    }}
                  >
                    {trevo}
                  </Circle>
                ))}
              </ContentTrevos>
            </ContainerTrevos>
          </div>
        </Article>
      </Main>

      <footer>
        <Table.Root>
          <Table.THead>
            <Table.Tr>
              <Table.Th css={{ color: configs.color, fontSize: '$l' }}>
                FAIXAS
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
                  {item.faixa}
                </Table.Td>
                <Table.Td css={{ color: configs.color, fontSize: '$l' }}>
                  {item.quantidade_ganhadores}
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
