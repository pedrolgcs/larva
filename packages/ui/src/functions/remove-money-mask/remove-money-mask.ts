const removeMoneyMask = (value: string | number): string => {
  const stringValue = value.toString()
  const regex = /[^0-9.-]+/g

  const valueWithoutNonNumeric = stringValue
    .split('.')
    .join('')
    .split(',')
    .join('.')

  return valueWithoutNonNumeric.replace(regex, '')
}

export { removeMoneyMask }
