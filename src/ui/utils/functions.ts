export function toLocalePrice(value: string) {
  return parseInt(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
