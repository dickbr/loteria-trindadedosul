import { StaticImageData } from 'next/image';

import LotomaniaImage from '../assets/images/loterias/lotomania.png';
import DuplasenaImage from '../assets/images/loterias/dupla-sena.png';
import LotofacilImage from '../assets/images/loterias/lotofacil.png';
import MegasenaImage from '../assets/images/loterias/megasena.png';
import QuinaImage from '../assets/images/loterias/quina.png';
import TimemaniaImage from '../assets/images/loterias/timemania.png';

import LotofacilCartaoAposta from '../assets/images/resultados/lotofacil.png';
import DiaDeSorteCartaoAposta from '../assets/images/resultados/diadesorte.png';
import DuplasenaCartaoAposta from '../assets/images/resultados/duplasena.png';
import FederalCartaoAposta from '../assets/images/resultados/federal.png';
import LotecaCartaoAposta from '../assets/images/resultados/loteca.png';
import LotomaniaCartaoAposta from '../assets/images/resultados/lotomania.png';
import MaismilionariaCartaoAposta from '../assets/images/resultados/maismilionaria.png';
import MegaCartaoAposta from '../assets/images/resultados/mega.png';
import QuinaCartaoAposta from '../assets/images/resultados/quina.png';
import TimemaniaCartaoAposta from '../assets/images/resultados/timemania.png';

import { Loterias } from '../services/api-caixa';

export type LoteriaDataConfig = {
  image: StaticImageData;
  textColor: string;
  bgLeft: string;
  bgRight: string;
};

export type ResultadosDataConfig = {
  image: StaticImageData;
  color: string;
};

export const getResultadosDataConfig = (
  loteria: Loterias
): ResultadosDataConfig => {
  switch (loteria) {
    case 'lotomania':
      return {
        image: LotomaniaCartaoAposta,
        color: '#f5964f'
      };
    case 'lotofacil':
      return {
        image: LotofacilCartaoAposta,
        color: '#8c3775'
      };
    case 'megasena':
      return {
        image: MegaCartaoAposta,
        color: '#019b61'
      };
    case 'maismilionaria':
      return {
        image: MaismilionariaCartaoAposta,
        color: '#1893b2'
      };
    case 'diadesorte':
      return {
        image: DiaDeSorteCartaoAposta,
        color: '#dfb912'
      };
    case 'duplasena':
      return {
        image: DuplasenaCartaoAposta,
        color: '#bb174d'
      };
    case 'federal':
      return {
        image: FederalCartaoAposta,
        color: '#0079ac'
      };
    case 'quina':
      return {
        image: QuinaCartaoAposta,
        color: '#535a9d'
      };
    case 'timemania':
      return {
        image: TimemaniaCartaoAposta,
        color: '#087507'
      };
    case 'loteca':
      return {
        image: LotecaCartaoAposta,
        color: '#E9463F'
      };
    default:
      return {
        image: LotofacilCartaoAposta,
        color: '#ea5105'
      };
  }
};

export const getLoteriaDataConfig = (loteria: Loterias): LoteriaDataConfig => {
  switch (loteria) {
    case 'lotomania':
      return {
        image: LotomaniaImage,
        textColor: '#ea5105',
        bgLeft: '#ffffff',
        bgRight: '#ea5105'
      };
    case 'duplasena':
      return {
        image: DuplasenaImage,
        textColor: '#ffffff',
        bgLeft: '#d0296c',
        bgRight: '#9a003c'
      };
    case 'lotofacil':
      return {
        image: LotofacilImage,
        textColor: '#ffffff',
        bgLeft: '#9C0E8E',
        bgRight: '#D800DB'
      };
    case 'megasena':
      return {
        image: MegasenaImage,
        textColor: '#ffffff',
        bgLeft: '#0c460e',
        bgRight: '#10d808'
      };
    case 'quina':
      return {
        image: QuinaImage,
        textColor: '#ffffff',
        bgLeft: '#3c268c',
        bgRight: '#26195B'
      };
    case 'timemania':
      return {
        image: TimemaniaImage,
        textColor: '#087507',
        bgLeft: '#feee01',
        bgRight: '#a7e508'
      };
    default:
      return {
        image: LotomaniaImage,
        textColor: '#ea5105',
        bgLeft: '#ffffff',
        bgRight: '#ea5105'
      };
  }
};
