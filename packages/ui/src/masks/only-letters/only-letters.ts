const onlyLetters = (value: string | number) => {
  const stringValue = value.toString()
  const regex = /[0-9!@#¨$%^&*)(+=._-]+/g

  return stringValue.replace(regex, '')
}

export { onlyLetters }
