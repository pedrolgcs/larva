import { onlyNumbers } from '../only-numbers/only-numbers'

const cep = (value: string | number) => {
  const stringValue = onlyNumbers(value)
  const regex = /^(\d{5})(\d{3})+?$/

  return stringValue.replace(regex, '$1-$2')
}

export { cep }
