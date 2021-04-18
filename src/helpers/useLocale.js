import { useIntl } from "umi";
import _ from "lodash";
import locales from "./locales";

export default function useLocale() {
  const intl = useIntl();

  return _.memoize((id, vars = {}) => {
    if (!id) {
      return id;
    }
    if (!locales.isInEvery(id)) {
      return id;
    }
    let newMessage;
    try {
      newMessage = intl.formatMessage({ id }, vars);
    } catch (e) {}

    return newMessage;
  });
}
