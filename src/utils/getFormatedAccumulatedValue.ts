const valueParsed = (value: string, complement?: string): string => {
  const sliceValue = complement?.slice(0, 1);

  switch (value.length) {
    case 1:
    case 2:
      return sliceValue === '0' ? value : `${value}.${sliceValue}00`;
    case 3:
      return `${value}`;
    default:
      return `${value}`;
  }
};

export const getFormatedAccumulatedValue = (
  accumulatedValue: number = 0
): string => {
  const value = accumulatedValue?.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'BLR'
  });

  const [first, second] = value.split('.');

  return valueParsed(first, second);
};
