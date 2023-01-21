const valueParsed = (value: string, complement?: string): string => {
  if (value.length === 3) {
    return value;
  }

  if (value.length === 2) {
    const sliceValue = complement?.slice(0, 1);
    return `${value},${sliceValue}`;
  }

  if (value.length === 1) {
    const sliceValue = complement?.slice(0, 1);
    return `${value},${sliceValue}`;
  }

  return '';
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
