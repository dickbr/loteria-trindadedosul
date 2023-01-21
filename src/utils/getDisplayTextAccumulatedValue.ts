export const getDisplayTextAccumulatedValue = (
  accumulatedValue: number = 0
): string => {
  const [currency] = accumulatedValue?.toString().split('.') as string[];
  switch (currency.length) {
    case 9:
    case 8:
    case 7:
      return 'Milhões';
    case 6:
    case 5:
    case 4:
      return 'Mil';
    default:
      return '';
  }
};
