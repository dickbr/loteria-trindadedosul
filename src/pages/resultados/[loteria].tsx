/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';

import { getLoteria, Loterias } from '../../services/api-caixa';
import { getResultadosDataConfig, ResultadosDataConfig } from '../../utils';
import { Resultados } from '../../views';

type LotofacilProps = {
  configs: ResultadosDataConfig;
  arrayOfDezenas: number[][] | string[];
  arrayOfDezenas2?: number[][] | string[] | null;
  dataConcurso: string;
  nome_mes_sorte?: string | null;
  numero_concurso: number;
  valorAcumulado: string;
  nome_time_coracao?: string;
  trevosSorteados?: number[];
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: string;
  }[];
  premiacao2?:
    | {
        acertos: number;
        nome: string;
        quantidade_ganhadores: number;
        valor_total: string;
      }[]
    | null;
  loteria: string;
};

const Lotofacil: NextPage<LotofacilProps> = props => {
  return (
    <>
      <Head>
        <title>Loterias - {props.loteria.toUpperCase()}</title>
      </Head>

      <Resultados {...props} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { loteria: 'megasena' } },
      { params: { loteria: 'lotofacil' } },
      { params: { loteria: 'quina' } },
      { params: { loteria: 'lotomania' } },
      { params: { loteria: 'timemania' } },
      { params: { loteria: 'duplasena' } },
      { params: { loteria: 'federal' } },
      { params: { loteria: 'diadesorte' } },
      { params: { loteria: 'supersete' } },
      { params: { loteria: 'maismilionaria' } },
      { params: { loteria: 'loteca' } }
    ],
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<GetStaticPropsResult<LotofacilProps>> => {
  const loteria = ctx?.params?.loteria as Loterias;

  const configs = getResultadosDataConfig(loteria);

  const {
    dezenas,
    dezenas_2,
    data_concurso,
    numero_concurso,
    nome_time_coracao,
    premiacao,
    premiacao_2,
    trevosSorteados,
    valor_acumulado,
    valor_estimado_proximo_concurso,
    nome_mes_sorte
  } = await getLoteria(loteria);

  const arrayOfDezenas: number[][] = [];

  if (dezenas) {
    for (const [index] of dezenas.entries()) {
      if ((index + 1 * 5) % 5 === 0) {
        const slice = dezenas.slice(index, index + 5);

        arrayOfDezenas.push(slice as []);
      }
    }
  }

  const convertToBRLCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const newPremiacao = premiacao.flatMap(item => {
    return {
      ...item,
      valor_total: convertToBRLCurrency.format(item.valor_total)
    };
  });

  const newPremiacao2 =
    premiacao_2 &&
    premiacao_2.flatMap(item => {
      return {
        ...item,
        valor_total: convertToBRLCurrency.format(item.valor_total)
      };
    });

  const valorAcumulado = () => {
    if (valor_acumulado && valor_acumulado !== 0) {
      return convertToBRLCurrency.format(valor_acumulado);
    }

    return convertToBRLCurrency.format(valor_estimado_proximo_concurso);
  };

  const dataConcurso = new Date(data_concurso as string).toLocaleDateString(
    'pt-BR',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  );

  return {
    props: {
      nome_time_coracao: nome_time_coracao ?? null,
      trevosSorteados: trevosSorteados ?? null,
      arrayOfDezenas: loteria === 'duplasena' ? dezenas : arrayOfDezenas,
      arrayOfDezenas2: loteria === 'duplasena' ? dezenas_2 : null,
      dataConcurso,
      numero_concurso,
      nome_mes_sorte: nome_mes_sorte ?? null,
      premiacao: newPremiacao,
      premiacao2: newPremiacao2 ?? null,
      valorAcumulado: valorAcumulado(),
      loteria,
      configs
    },
    revalidate: 60 * 60 * 16 // 16 hours
  };
};

export default Lotofacil;
