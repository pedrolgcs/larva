import { removeMoneyMask } from '../../functions'

const moneyMaskCustomization = {
  maskBehaviorMode: (value: string | number) => {
    const numberWithoutMask = removeMoneyMask(value)

    const normalizedMoneyValue = moneyMaskCustomization.normalizeMoneyValue(
      numberWithoutMask.toString(),
    )

    const isIntegerOfOneDigit = normalizedMoneyValue.length === 1

    if (isIntegerOfOneDigit) {
      const newNumberFormat = Number(normalizedMoneyValue) / 100
      return Number(newNumberFormat).toFixed(2)
    }

    return normalizedMoneyValue
  },

  normalizeMoneyValue: (value: string) => {
    const [stringInteger, stringDecimal] = value.split('.')

    if (stringDecimal && stringDecimal.length === 1) {
      const lastPositionOfTheInteger = stringInteger.length - 1
      const lastToIntegerPlace = stringInteger[lastPositionOfTheInteger]

      if (lastPositionOfTheInteger !== 0) {
        const firstIntegerPlace = stringInteger.substring(
          0,
          lastPositionOfTheInteger,
        )

        return `${firstIntegerPlace}.${lastToIntegerPlace}${stringDecimal}`
      }

      return `${0}.${lastToIntegerPlace}${stringDecimal}`
    }

    if (stringDecimal && stringDecimal.length === 3) {
      const firstDecimalPlace = stringDecimal.substring(0, 1)
      const lastTwoDecimalPlaces = stringDecimal.substring(1, 3)
      const integerIsZero = Number(stringInteger) === 0

      if (integerIsZero) {
        return `${firstDecimalPlace}.${lastTwoDecimalPlaces}`
      }

      return `${stringInteger}${firstDecimalPlace}.${lastTwoDecimalPlaces}`
    }

    return value
  },
}

const money = (value: string | number) => {
  if (value) {
    const moneyValue = moneyMaskCustomization.maskBehaviorMode(value)

    return moneyValue
      .replace(/\D/g, '')
      .replace(/\D/g, '.')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.')
  }

  return ''
}

export { money }
