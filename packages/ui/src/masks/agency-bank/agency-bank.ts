import { onlyNumbers } from '../only-numbers/only-numbers'

const agencyBank = (value: string | number) => {
  const stringValue = onlyNumbers(value.toString())
  const regex = /^(\D{4})+?$/

  return stringValue.replace(regex, '')
}

export { agencyBank }
