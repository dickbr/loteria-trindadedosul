import { EnumLoterias } from '../services/api-caixa';
import { theme } from '../styles';

const { colors: themeColors } = theme;

const colors = {
  [EnumLoterias.megasena]: `$${themeColors.megasena.token}`,
  [EnumLoterias.lotofacil]: `$${themeColors.lotofacil.token}`,
  [EnumLoterias.quina]: `$${themeColors.quina.token}`,
  [EnumLoterias.lotomania]: `$${themeColors.lotomania.token}`,
  [EnumLoterias.timemania]: `$${themeColors.timemania.token}`,
  [EnumLoterias.duplasena]: `$${themeColors.duplasena.token}`,
  [EnumLoterias.timemania]: `$${themeColors.timemania.token}`,
  [EnumLoterias.federal]: `$${themeColors.federal.token}`,
  [EnumLoterias.diadesorte]: `$${themeColors.diadesorte.token}`,
  [EnumLoterias.supersete]: `$${themeColors.supersete.token}`
};

export const getLotoByDay = () => {
  const day = new Date().getDay();
  switch (day) {
    case 1:
      return {
        color: `$${themeColors.segunda.token}`,
        data: [
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.lotomania,
            color: colors[EnumLoterias.lotomania]
          },
          {
            name: EnumLoterias.supersete,
            color: colors[EnumLoterias.supersete]
          }
        ]
      };
    case 2:
      return {
        color: `$${themeColors.terca.token}`,
        data: [
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.timemania,
            color: colors[EnumLoterias.timemania]
          },
          {
            name: EnumLoterias.duplasena,
            color: colors[EnumLoterias.duplasena]
          },
          {
            name: EnumLoterias.diadesorte,
            color: colors[EnumLoterias.diadesorte]
          }
        ]
      };
    case 3:
      return {
        color: `$${themeColors.quarta.token}`,
        data: [
          {
            name: EnumLoterias.megasena,
            color: colors[EnumLoterias.megasena]
          },
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.lotomania,
            color: colors[EnumLoterias.lotomania]
          },
          {
            name: EnumLoterias.supersete,
            color: colors[EnumLoterias.supersete]
          },
          {
            name: EnumLoterias.federal,
            color: colors[EnumLoterias.federal]
          }
        ]
      };

    case 4:
      return {
        color: `$${themeColors.quinta.token}`,
        data: [
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.timemania,
            color: colors[EnumLoterias.timemania]
          },
          {
            name: EnumLoterias.duplasena,
            color: colors[EnumLoterias.duplasena]
          },
          {
            name: EnumLoterias.diadesorte,
            color: colors[EnumLoterias.diadesorte]
          }
        ]
      };

    case 5:
      return {
        color: `$${themeColors.sexta.token}`,
        data: [
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.timemania,
            color: colors[EnumLoterias.timemania]
          },
          {
            name: EnumLoterias.supersete,
            color: colors[EnumLoterias.supersete]
          }
        ]
      };

    default:
      return {
        color: `$${themeColors.sexta.token}`,
        data: [
          {
            name: EnumLoterias.quina,
            color: colors[EnumLoterias.quina]
          },
          {
            name: EnumLoterias.lotofacil,
            color: colors[EnumLoterias.lotofacil]
          },
          {
            name: EnumLoterias.timemania,
            color: colors[EnumLoterias.timemania]
          },
          {
            name: EnumLoterias.supersete,
            color: colors[EnumLoterias.supersete]
          }
        ]
      };
  }
};
