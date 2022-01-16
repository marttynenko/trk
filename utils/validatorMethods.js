import { extend }  from 'vee-validate'
import { alpha_spaces} from 'vee-validate/dist/rules.umd';

extend('email', value => {
  if (!value) {
    return 'Обязательное поле';
  }

  // if the field is not a valid email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некорректный email';
  }

  return true;
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined, false].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'Обязательное поле'
});

extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: 'Минимальная длина поля: {length}'
});

extend('phone', {
  validate(value) {
    return {
      required: true,
      valid: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/i.test(value)
    };
  },
  computesRequired: true,
  message: 'Некорректный номер телефона'
});


extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Только буквы и пробелы'
});