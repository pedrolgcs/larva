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
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => string
    maskRegex: (value: string | number) => string
  }
>

const masks: Masks = {
  agencyBank: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 4
      return Mask.agencyBank(event.currentTarget.value)
    },
    maskRegex: Mask.agencyBank,
  },

  money: {
    maskEvent: (event) => {
      return Mask.money(event.currentTarget.value)
    },
    maskRegex: Mask.money,
  },

  cpf: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 15
      return Mask.cpf(event.currentTarget.value)
    },
    maskRegex: Mask.cpf,
  },

  cnpj: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 18
      return Mask.cnpj(event.currentTarget.value)
    },
    maskRegex: Mask.cnpj,
  },

  phone: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 20
      return Mask.phone(event.currentTarget.value)
    },
    maskRegex: Mask.phone,
  },

  cep: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 9
      return Mask.cep(event.currentTarget.value)
    },
    maskRegex: Mask.cep,
  },

  date: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 10
      return Mask.date(event.currentTarget.value)
    },
    maskRegex: Mask.date,
  },

  onlyLetters: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      return Mask.onlyLetters(event.currentTarget.value)
    },
    maskRegex: Mask.onlyLetters,
  },

  onlyNumbers: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      return Mask.onlyNumbers(event.currentTarget.value)
    },
    maskRegex: Mask.onlyNumbers,
  },
}

export { masks, type MaskTypes }
