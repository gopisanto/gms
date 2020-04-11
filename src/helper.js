export const formatCurrency = money => new Intl.NumberFormat('de-DE',
  { style: 'currency', currency: 'EUR' }
).format(money);