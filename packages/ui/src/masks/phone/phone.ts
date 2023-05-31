import { onlyNumbers } from '../only-numbers/only-numbers'

const phone = (value: string | number) => {
  const stringValue = onlyNumbers(value)

  const validValue =
    stringValue.length > 11 ? stringValue.substring(0, 11) : stringValue

  if (validValue.length === 11) {
    return validValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
  }

  return validValue
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d{4})/, '$1-$2')
}

export { phone }
