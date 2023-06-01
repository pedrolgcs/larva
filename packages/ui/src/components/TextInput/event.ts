import * as React from 'react'
import * as Mask from '../../masks'

type MaskTypes =
  | 'agencyBank'
  | 'money'
  | 'cpf'
  | 'cnpj'
  | 'phone'
  | 'cep'
  | 'date'
  | 'onlyLetters'
  | 'onlyNumbers'

type Masks = Record<
  MaskTypes,
  {
    event: (event: React.FormEvent<HTMLInputElement>) => string
  }
>

const masks: Masks = {
  agencyBank: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 4
      return Mask.agencyBank(event.currentTarget.value)
    },
  },

  money: {
    event: (event) => {
      return Mask.money(event.currentTarget.value)
    },
  },

  cpf: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 15
      return Mask.cpf(event.currentTarget.value)
    },
  },

  cnpj: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 18
      return Mask.cnpj(event.currentTarget.value)
    },
  },

  phone: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 20
      return Mask.phone(event.currentTarget.value)
    },
  },

  cep: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 9
      return Mask.cep(event.currentTarget.value)
    },
  },

  date: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 10
      return Mask.date(event.currentTarget.value)
    },
  },

  onlyLetters: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      return Mask.onlyLetters(event.currentTarget.value)
    },
  },

  onlyNumbers: {
    event: (event: React.FormEvent<HTMLInputElement>) => {
      return Mask.onlyNumbers(event.currentTarget.value)
    },
  },
}

export { masks, type MaskTypes }
