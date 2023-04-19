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

type TimeManiaProps = {
  configs: ResultadosDataConfig;
  arrayOfDezenas: number[][];
  dataConcurso: string;
  numero_concurso: number;
  valorAcumulado: string;
  nome_time_coracao: string;
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: number;
  }[];
};

export const Timemania: React.FC<TimeManiaProps> = props => {
  const {
    dataConcurso,
    numero_concurso,
    valorAcumulado,
    premiacao,
    nome_time_coracao,
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
              <span>Time do Coração:</span>
              <ContentTrevos>
                <p>{nome_time_coracao}</p>
              </ContentTrevos>
            </ContainerTrevos>
          </div>
        </Article>
      </Main>

      <footer>
        <Table.Root>
          <Table.THead>
            <Table.Tr>
              <Table.Th css={{ color: configs.color }}>ACERTOS</Table.Th>
              <Table.Th css={{ color: configs.color }}>GANHADORES</Table.Th>
              <Table.Th css={{ color: configs.color }}>PRÊMIO</Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {premiacao.map(item => (
              <Table.Tr key={item.valor_total}>
                <Table.Td css={{ color: configs.color }}>
                  {item.acertos}
                </Table.Td>
                <Table.Td css={{ color: configs.color }}>
                  {item.quantidade_ganhadores}
                </Table.Td>
                <Table.Td css={{ color: configs.color }}>
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
