import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';

import { getLoteria, Loterias } from '../services/api-caixa';

import { Loteria as LoteriaPage, LoteriaData, LoteriaProps } from '../views';

import {
  getDisplayTextAccumulatedValue,
  getFormatedAccumulatedValue,
  getLoteriaDataConfig
} from '../utils';

const Loteria: NextPage<LoteriaProps> = ({
  loteriaData,
  loteriaDataConfig
}) => {
  const router = useRouter();
  const { loteria } = router.query;

  return (
    <>
      <Head>
        <title>{(loteria as string).toUpperCase()}</title>
      </Head>

      <LoteriaPage
        loteriaData={loteriaData}
        loteriaDataConfig={loteriaDataConfig}
      />
    </>
  );
};

export default Loteria;

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

export const getStaticProps: GetStaticProps = async ctx => {
  const loteria = ctx?.params?.loteria as Loterias;

  const data = await getLoteria(loteria);

  const loteriaDataConfig = getLoteriaDataConfig(loteria);

  const value =
    data && data.valor_estimado_proximo_concurso > 0
      ? data?.valor_estimado_proximo_concurso
      : data?.valor_acumulado;

  const accumulatedValue = getFormatedAccumulatedValue(value);
  const displayTextAccumulatedValue = getDisplayTextAccumulatedValue(value);

  const loteriaData: LoteriaData = {
    accumulatedValue,
    displayTextAccumulatedValue,
    contestDate: new Date(data?.data_concurso as string).toLocaleDateString(
      'pt-BR',
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    ),
    contestNumber: data?.numero_concurso
  };

  return {
    props: {
      loteriaData,
      loteriaDataConfig
    },
    revalidate: 60 * 60 * 16 // 16 hours
  };
};
