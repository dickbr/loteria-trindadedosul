import axios from 'axios';

export enum EnumLoterias {
  'megasena' = 'mega-sena',
  'lotofacil' = 'lotofacil',
  'quina' = 'quina',
  'lotomania' = 'lotomania',
  'timemania' = 'timemania',
  'duplasena' = 'dupla-sena',
  'federal' = 'federal',
  'diadesorte' = 'diadesorte',
  'supersete' = 'supersete',
  'maismilionaria' = 'maismilionaria',
  'loteca' = 'loteca'
}

export type Loterias = keyof typeof EnumLoterias;

export type LoteriaResponse = {
  nome: string;
  numero_concurso: number;
  data_concurso: string;
  data_concurso_milliseconds: number;
  local_realizacao: string;
  rateio_processamento: boolean;
  acumulou: boolean;
  valor_acumulado: number;
  dezenas: string[];
  premiacao: {
    acertos: number;
    nome: string;
    quantidade_ganhadores: number;
    valor_total: number;
  }[];
  local_ganhadores: string[];
  arrecadacao_total: number;
  concurso_proximo: number;
  data_proximo_concurso: string;
  data_proximo_concurso_milliseconds: number;
  valor_estimado_proximo_concurso: number;
  valor_acumulado_especial: number;
  nome_acumulado_especial: string;
  concurso_especial: boolean;
};

const api = axios.create({
  baseURL: process.env.API_LOTERIA_URL,
  headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  params: {
    token: process.env.API_LOTERIA_TOKEN
  }
});

export const getLoteria = async (
  loteria: Loterias
): Promise<LoteriaResponse> => {
  if (!loteria) throw new Error('Loteria is required');

  const { data } = await api.get<LoteriaResponse>('/app/resultado', {
    params: {
      loteria
    }
  });

  return data;
};
