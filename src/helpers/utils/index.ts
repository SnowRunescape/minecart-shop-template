export const moneyFormat = (value: string|number) => {
  return parseFloat(`${value}`).toFixed(2);
}