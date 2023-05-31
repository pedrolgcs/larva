var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/TextInput/TextInput.tsx
import * as React from "react";

// src/masks/only-numbers/only-numbers.ts
var onlyNumbers = (value) => {
  const stringValue = value.toString();
  const regex = /\D/g;
  return stringValue.replace(regex, "");
};

// src/masks/agency-bank/agency-bank.ts
var agencyBank = (value) => {
  const stringValue = onlyNumbers(value.toString());
  const regex = /^(\D{4})+?$/;
  return stringValue.replace(regex, "");
};

// src/masks/cep/cep.ts
var cep = (value) => {
  const stringValue = onlyNumbers(value);
  const regex = /^(\d{5})(\d{3})+?$/;
  return stringValue.replace(regex, "$1-$2");
};

// src/masks/cnpj/cnpj.ts
var cnpj = (value) => {
  const stringValue = onlyNumbers(value);
  return stringValue.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{2})/, "$1-$2");
};

// src/masks/cpf/cpf.ts
var cpf = (value) => {
  const stringValue = onlyNumbers(value);
  return stringValue.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
};

// src/masks/date/date.ts
var date = (value) => {
  const stringValue = onlyNumbers(value);
  return stringValue.replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{4})(\d)/, "$1");
};

// src/functions/remove-money-mask/remove-money-mask.ts
var removeMoneyMask = (value) => {
  const stringValue = value.toString();
  const regex = /[^0-9.-]+/g;
  const valueWithoutNonNumeric = stringValue.split(".").join("").split(",").join(".");
  return valueWithoutNonNumeric.replace(regex, "");
};

// src/functions/remove-special-characters/remove-special-characters.ts
var removeSpecialCharacters = (value) => {
  const stringValue = value.toString();
  const regex = /[/!@#¨$%^&*)(+=._-]+/g;
  return stringValue.replace(regex, "");
};

// src/masks/money/money.ts
var moneyMaskCustomization = {
  maskBehaviorMode: (value) => {
    const numberWithoutMask = removeMoneyMask(value);
    const normalizedMoneyValue = moneyMaskCustomization.normalizeMoneyValue(
      numberWithoutMask.toString()
    );
    const isIntegerOfOneDigit = normalizedMoneyValue.length === 1;
    if (isIntegerOfOneDigit) {
      const newNumberFormat = Number(normalizedMoneyValue) / 100;
      return Number(newNumberFormat).toFixed(2);
    }
    return normalizedMoneyValue;
  },
  normalizeMoneyValue: (value) => {
    const [stringInteger, stringDecimal] = value.split(".");
    if (stringDecimal && stringDecimal.length === 1) {
      const lastPositionOfTheInteger = stringInteger.length - 1;
      const lastToIntegerPlace = stringInteger[lastPositionOfTheInteger];
      if (lastPositionOfTheInteger !== 0) {
        const firstIntegerPlace = stringInteger.substring(
          0,
          lastPositionOfTheInteger
        );
        return `${firstIntegerPlace}.${lastToIntegerPlace}${stringDecimal}`;
      }
      return `${0}.${lastToIntegerPlace}${stringDecimal}`;
    }
    if (stringDecimal && stringDecimal.length === 3) {
      const firstDecimalPlace = stringDecimal.substring(0, 1);
      const lastTwoDecimalPlaces = stringDecimal.substring(1, 3);
      const integerIsZero = Number(stringInteger) === 0;
      if (integerIsZero) {
        return `${firstDecimalPlace}.${lastTwoDecimalPlaces}`;
      }
      return `${stringInteger}${firstDecimalPlace}.${lastTwoDecimalPlaces}`;
    }
    return value;
  }
};
var money = (value) => {
  if (value) {
    const moneyValue = moneyMaskCustomization.maskBehaviorMode(value);
    return moneyValue.replace(/\D/g, "").replace(/\D/g, ".").replace(/(\d)(\d{2})$/, "$1,$2").replace(/(?=(\d{3})+(\D))\B/g, ".");
  }
  return "";
};

// src/masks/only-letters/only-letters.ts
var onlyLetters = (value) => {
  const stringValue = value.toString();
  const regex = /[0-9!@#¨$%^&*)(+=._-]+/g;
  return stringValue.replace(regex, "");
};

// src/masks/phone/phone.ts
var phone = (value) => {
  const stringValue = onlyNumbers(value);
  const validValue = stringValue.length > 11 ? stringValue.substring(0, 11) : stringValue;
  if (validValue.length === 11) {
    return validValue.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{4})/, "$1-$2");
  }
  return validValue.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d{4})/, "$1-$2");
};

// src/components/TextInput/masks.ts
var masks = {
  agencyBank: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 4;
      return agencyBank(event.currentTarget.value);
    },
    maskRegex: agencyBank
  },
  money: {
    maskEvent: (event) => {
      return money(event.currentTarget.value);
    },
    maskRegex: money
  },
  cpf: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 15;
      return cpf(event.currentTarget.value);
    },
    maskRegex: cpf
  },
  cnpj: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 18;
      return cnpj(event.currentTarget.value);
    },
    maskRegex: cnpj
  },
  phone: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 20;
      return phone(event.currentTarget.value);
    },
    maskRegex: phone
  },
  cep: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 9;
      return cep(event.currentTarget.value);
    },
    maskRegex: cep
  },
  date: {
    maskEvent: (event) => {
      event.currentTarget.maxLength = 10;
      return date(event.currentTarget.value);
    },
    maskRegex: date
  },
  onlyLetters: {
    maskEvent: (event) => {
      return onlyLetters(event.currentTarget.value);
    },
    maskRegex: onlyLetters
  },
  onlyNumbers: {
    maskEvent: (event) => {
      return onlyNumbers(event.currentTarget.value);
    },
    maskRegex: onlyNumbers
  }
};

// src/components/TextInput/TextInput.tsx
import { jsx } from "react/jsx-runtime";
var TextInput = React.forwardRef(
  (props, ref) => {
    const _a = props, { name, maskType, onChange } = _a, rest = __objRest(_a, ["name", "maskType", "onChange"]);
    const mask = maskType ? masks[maskType] : null;
    const handleChange = React.useCallback(
      (event) => {
        if (mask) {
          event.currentTarget.value = mask.maskEvent(event);
        }
        if (typeof onChange === "function") {
          onChange(event);
        }
      },
      [mask, onChange]
    );
    return /* @__PURE__ */ jsx("input", __spreadProps(__spreadValues({}, rest), { ref, onChange: handleChange }));
  }
);
TextInput.displayName = "TextInput";
export {
  TextInput,
  agencyBank,
  cep,
  cnpj,
  cpf,
  date,
  money,
  onlyLetters,
  onlyNumbers,
  phone,
  removeMoneyMask,
  removeSpecialCharacters
};
