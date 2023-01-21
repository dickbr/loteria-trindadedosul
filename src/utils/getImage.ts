import { StaticImageData } from 'next/image';

import Monday from '../assets/images/game-day/segunda.png';
import Tuesday from '../assets/images/game-day/terca.png';
import Wednesday from '../assets/images/game-day/quarta.png';
import Thursday from '../assets/images/game-day/quinta.png';
import Friday from '../assets/images/game-day/sexta.png';

export const getImage = (): StaticImageData => {
  const day = new Date().getDay();

  switch (day) {
    case 1:
      return Monday;
    case 2:
      return Tuesday;
    case 3:
      return Wednesday;
    case 4:
      return Thursday;
    case 5:
      return Friday;
    default:
      return Monday;
  }
};
