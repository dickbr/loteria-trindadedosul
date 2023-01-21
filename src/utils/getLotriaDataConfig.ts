import { StaticImageData } from 'next/image';

import LotomaniaImage from '../assets/images/loterias/lotomania.png';
import DuplasenaImage from '../assets/images/loterias/dupla-sena.png';
import LotofacilImage from '../assets/images/loterias/lotofacil.png';
import MegasenaImage from '../assets/images/loterias/megasena.png';
import QuinaImage from '../assets/images/loterias/quina.png';
import TimemaniaImage from '../assets/images/loterias/timemania.png';
import { Loterias } from '../services/api-caixa';

export type LoteriaDataConfig = {
  image: StaticImageData;
  textColor: string;
};

export const getLoteriaDataConfig = (loteria: Loterias): LoteriaDataConfig => {
  switch (loteria) {
    case 'lotomania':
      return {
        image: LotomaniaImage,
        textColor: '#fa6403'
      };
    case 'duplasena':
      return {
        image: DuplasenaImage,
        textColor: 'whiteAlpha.900'
      };
    case 'lotofacil':
      return {
        image: LotofacilImage,
        textColor: 'whiteAlpha.900'
      };
    case 'megasena':
      return {
        image: MegasenaImage,
        textColor: 'whiteAlpha.900'
      };
    case 'quina':
      return {
        image: QuinaImage,
        textColor: 'whiteAlpha.900'
      };
    case 'timemania':
      return {
        image: TimemaniaImage,
        textColor: 'whiteAlpha.900'
      };
    default:
      return {
        image: LotomaniaImage,
        textColor: 'red.500'
      };
  }
};
