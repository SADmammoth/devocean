import _ from 'lodash';
import { useIntl } from 'umi';

import locales from '../functions/locales';

export default function useLocale() {
  const intl = useIntl();

  return _.memoize((id, vars = {}) => {
    if (!id) {
      return id;
    }
    if (!locales.isInEvery(id)) {
      if (process.env.NODE_ENV === 'development') {
        debug(id, vars);
      }
      return id;
    }
    let newMessage;
    try {
      newMessage = intl.formatMessage({ id }, vars);
    } catch (e) {}

    return newMessage;
  });
}

function debug(id, vars) {
  const locales = JSON.parse(
    localStorage.getItem('DEV_unassigned_locales') || '{}',
  );
  let itemToSave = id;
  if (vars && !_.isEmpty(vars)) {
    itemToSave = vars;
  }
  localStorage.setItem(
    'DEV_unassigned_locales',
    JSON.stringify({ ...locales, [id]: itemToSave }),
  );
}
