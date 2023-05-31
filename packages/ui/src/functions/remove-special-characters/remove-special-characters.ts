const removeSpecialCharacters = (value: string | number) => {
  const stringValue = value.toString()
  const regex = /[/!@#¨$%^&*)(+=._-]+/g

  return stringValue.replace(regex, '')
}

export { removeSpecialCharacters }
