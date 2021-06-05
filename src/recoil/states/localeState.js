import { selector } from 'recoil';
import { getAllLocales, getLocale, setLocale } from 'umi';

const baseKey = 'localeState_';

export const validLocales = getAllLocales();

const localeState = selector({
  key: baseKey,
  get: () => {
    const currentLocale = getLocale();
    return currentLocale;
  },
  set: ({}, value) => {
    if (validLocales.includes(value)) {
      setLocale(value);
    }
  },
});

export default localeState;
