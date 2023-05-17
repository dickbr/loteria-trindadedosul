/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { lighten } from 'polished';
import { ResultadosDataConfig } from '../../../utils';
import { Table } from '../../Table';
import { Article, Container, Header, Image, Main, Section } from '../styles';
import { H1, H2, H3, Strong } from '../Texts';
import { Pill, PillContainer, PillContent } from './styles';

type FederalProps = {
  configs: ResultadosDataConfig;
  dataConcurso: string;
  numero_concurso: number;
  valorAcumulado: string;
  premiacao: {
    nome: string;
    bilhete: string;
    faixa: number;
    valor_total: string;
  }[];
};

export const Federal: React.FC<FederalProps> = props => {
  const { dataConcurso, numero_concurso, valorAcumulado, premiacao, configs } =
    props;

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
          <PillContainer>
            {premiacao.map(item => (
              <PillContent key={item.faixa}>
                <span>{item.faixa}º</span>
                <Pill
                  style={{
                    color: configs.color,
                    boxShadow: `0px 0px 15px ${lighten(0.3, configs.color)}`
                  }}
                >
                  {item.valor_total}
                </Pill>
              </PillContent>
            ))}
          </PillContainer>
        </Article>
      </Main>

      <footer>
        <Table.Root>
          <Table.THead>
            <Table.Tr>
              <Table.Th css={{ color: configs.color }}>ACERTOS</Table.Th>
              <Table.Th css={{ color: configs.color }}>BILHETE</Table.Th>
              <Table.Th css={{ color: configs.color }}>PRÊMIO</Table.Th>
            </Table.Tr>
          </Table.THead>
          <Table.TBody>
            {premiacao.map(item => (
              <Table.Tr key={item.valor_total}>
                <Table.Td css={{ color: configs.color }}>{item.nome}</Table.Td>
                <Table.Td css={{ color: configs.color }}>
                  {item.bilhete}
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
