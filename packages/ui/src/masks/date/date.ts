import { onlyNumbers } from '../only-numbers/only-numbers'

const date = (value: string | number) => {
  const stringValue = onlyNumbers(value)

  return stringValue
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}

export { date }
