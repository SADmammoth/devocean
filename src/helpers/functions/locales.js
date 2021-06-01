import en from '../../locales/en-EN.js';
import ru from '../../locales/ru-RU.js';

const locales = {
  isInEvery: (key) => {
    return ru[key] && en[key];
  },
};

export default locales;
