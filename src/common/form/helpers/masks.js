import { createTextMask, createNumberMask } from 'redux-form-input-masks';

// Input Text Masks
// https://renato-bohler.github.io/redux-form-input-masks/#/

export const phoneMask = createTextMask({
  pattern: '(999) 999-9999',
});

export const zipCodeMask = createTextMask({
  pattern: '99999-9999',
});

export const currencyMask = createNumberMask({
  prefix: '$',
  decimalPlaces: 2,
  locale: 'en-US',
});

export const dateMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const dateTimeMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M'];
