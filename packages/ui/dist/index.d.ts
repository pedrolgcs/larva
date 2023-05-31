import * as React from 'react';

type MaskTypes = 'agencyBank' | 'money' | 'cpf' | 'cnpj' | 'phone' | 'cep' | 'date' | 'onlyLetters' | 'onlyNumbers';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    maskType?: MaskTypes;
};
declare const TextInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    maskType?: MaskTypes | undefined;
} & React.RefAttributes<HTMLInputElement>>;

declare const removeMoneyMask: (value: string | number) => string;

declare const removeSpecialCharacters: (value: string | number) => string;

declare const agencyBank: (value: string | number) => string;

declare const cep: (value: string | number) => string;

declare const cnpj: (value: string | number) => string;

declare const cpf: (value: string | number) => string;

declare const date: (value: string | number) => string;

declare const money: (value: string | number) => string;

declare const onlyLetters: (value: string | number) => string;

declare const onlyNumbers: (value: string | number) => string;

declare const phone: (value: string | number) => string;

export { TextInput, TextInputProps, agencyBank, cep, cnpj, cpf, date, money, onlyLetters, onlyNumbers, phone, removeMoneyMask, removeSpecialCharacters };
