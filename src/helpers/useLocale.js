import { useIntl } from "umi";

export default function useLocale() {
  const intl = useIntl();

  return (id, vars = {}) => {
    return intl.formatMessage({ id }, vars);
  };
}
