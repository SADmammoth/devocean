import ru from "../locales/ru-RU.js";
import en from "../locales/en-EN.js";

const locales = {
  isInEvery: (key) => {
    return ru[key] && en[key];
  },
};

export default locales;
