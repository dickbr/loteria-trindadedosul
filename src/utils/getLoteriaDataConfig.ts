import { StaticImageData } from 'next/image';

import LotomaniaImage from '../assets/images/loterias/lotomania.png';
import DuplasenaImage from '../assets/images/loterias/dupla-sena.png';
import LotofacilImage from '../assets/images/loterias/lotofacil.png';
import MegasenaImage from '../assets/images/loterias/megasena.png';
import QuinaImage from '../assets/images/loterias/quina.png';
import TimemaniaImage from '../assets/images/loterias/timemania.png';

import LotofacilCartaoAposta from '../assets/images/lotofacil.png';

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
        image: LotofacilCartaoAposta,
        color: '#f5964f'
      };
    case 'lotofacil':
      return {
        image: LotofacilCartaoAposta,
        color: '#8c3775'
      };
    case 'megasena':
      return {
        image: LotofacilCartaoAposta,
        color: '#019b61'
      };
    case 'maismilionaria':
      return {
        image: LotofacilCartaoAposta,
        color: '#1893b2'
      };
    case 'diadesorte':
      return {
        image: LotofacilCartaoAposta,
        color: '#dfb912'
      };
    case 'duplasena':
      return {
        image: LotofacilCartaoAposta,
        color: '#bb174d'
      };
    case 'federal':
      return {
        image: LotofacilCartaoAposta,
        color: '#0079ac'
      };
    case 'quina':
      return {
        image: LotofacilCartaoAposta,
        color: '#535a9d'
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
