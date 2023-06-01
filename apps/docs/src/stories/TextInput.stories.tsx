import { Inter } from 'next/font/google'
import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@ubli/ui'
import styles from './TextInput.module.css'

const inter = Inter({ subsets: ['latin'] })

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    maskType: null,
  },
  argTypes: {
    maskType: {
      control: 'select',
      options: [
        'money',
        'cep',
        'date',
        'phone',
        'cpf',
        'cnpj',
        'agencyBank',
        'onlyLetters',
        'onlyNumbers',
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          className={(inter.className, styles.container)}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Input field</span>
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your text',
  },
}

export const Money: StoryObj<TextInputProps> = {
  args: {
    placeholder: '0.00',
    maskType: 'money',
  },
}

export const CEP: StoryObj<TextInputProps> = {
  args: {
    placeholder: '00000-000',
    maskType: 'cep',
  },
}

export const Date: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'dd/mm/yyyy',
    maskType: 'date',
  },
}

export const Phone: StoryObj<TextInputProps> = {
  args: {
    placeholder: '(00) 00000-0000',
    maskType: 'phone',
  },
}

export const CPF: StoryObj<TextInputProps> = {
  args: {
    placeholder: '000.000.000-00',
    maskType: 'cpf',
  },
}

export const CNPJ: StoryObj<TextInputProps> = {
  args: {
    placeholder: '00.000.000/0000-00',
    maskType: 'cnpj',
  },
}

export const AgencyBank: StoryObj<TextInputProps> = {
  args: {
    placeholder: '0000',
    maskType: 'agencyBank',
  },
}

export const Letters: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'letters',
    maskType: 'onlyLetters',
  },
}

export const Numbers: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'numbers',
    maskType: 'onlyNumbers',
  },
}
