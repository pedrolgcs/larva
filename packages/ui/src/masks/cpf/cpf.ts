import { onlyNumbers } from '../only-numbers/only-numbers'

const cpf = (value: string | number) => {
  const stringValue = onlyNumbers(value)

  return stringValue
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export { cpf }
