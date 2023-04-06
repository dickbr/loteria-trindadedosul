/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import type { NextPage } from 'next';
import Head from 'next/head';
import { ResultadosDataConfig } from '../../utils';
import { Default } from '../../components/Resultados';

export type ResultadosProps = {
  configs: ResultadosDataConfig;
  arrayOfDezenas: number[][];
  dataConcurso: string;
  numero_concurso: number;
  nome_mes_sorte?: string | null;
  valorAcumulado: string;
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: string;
  }[];
  loteria: string;
};

export const Resultados: NextPage<ResultadosProps> = ({ loteria, ...rest }) => {
  return (
    <>
      <Head>
        <title>Loterias - {loteria.toUpperCase()}</title>
      </Head>

      <Default loteria={loteria} {...rest} />
    </>
  );
};
