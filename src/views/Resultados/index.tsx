/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Default,
  DuplaSena,
  Federal,
  MaisMilionaria,
  Timemania
} from '../../components/Resultados';
import { Lotomania } from '../../components/Resultados/Lotomania';

export type ResultadosProps = {
  loteria: string;
};

const RenderResultado = ({ loteria, ...rest }: any) => {
  switch (loteria) {
    case 'duplasena':
      return <DuplaSena {...rest} />;

    case 'federal':
      return <Federal {...rest} />;

    case 'maismilionaria':
      return <MaisMilionaria {...rest} />;

    case 'lotomania':
      return <Lotomania {...rest} />;

    case 'timemania':
      return <Timemania {...rest} />;

    default:
      return <Default loteria={loteria} {...rest} />;
  }
};

export const Resultados: NextPage<ResultadosProps> = props => {
  const { loteria } = props;

  return (
    <>
      <Head>
        <title>Loterias - {loteria.toUpperCase()}</title>
      </Head>

      {RenderResultado(props)}
    </>
  );
};
