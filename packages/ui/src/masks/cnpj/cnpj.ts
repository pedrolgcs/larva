import { onlyNumbers } from '../only-numbers/only-numbers'

const cnpj = (value: string | number) => {
  const stringValue = onlyNumbers(value)

  return stringValue
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{2})/, '$1-$2')
}

export { cnpj }
