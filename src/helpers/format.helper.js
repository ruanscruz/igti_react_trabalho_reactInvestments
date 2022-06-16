const formatToReal = value => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatToPercent = value => {
  return `${value.toFixed(2)}%`;
};

const formatToDate = (month, year) => {
  const months = [
    '',
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  return `${months[month]}/${year}`;
};

export { formatToReal, formatToPercent, formatToDate };
