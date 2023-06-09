function toDate(value: string): Date {
  const [day, month, year] = value.split('/')

  const date = new Date(`${Number(year)}-${Number(month)}-${Number(day)}`)

  return date
}

export { toDate }
