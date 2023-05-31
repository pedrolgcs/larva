const onlyNumbers = (value: string | number): string => {
  const stringValue = value.toString()
  const regex = /\D/g

  return stringValue.replace(regex, '')
}

export { onlyNumbers }
