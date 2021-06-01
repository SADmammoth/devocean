import { useMemo } from 'react';

import { useRecoilValue } from 'recoil';

import localeState from '../../recoil/states/localeState';
import useLocale from '../hooks/useLocale';

export default function useLocalizedForm(inputs) {
  const locale = useLocale();
  const localizeInput = ({ label, placeholder, description, ...rest }) => {
    return {
      label: locale(label),
      placeholder: locale(placeholder),
      description: locale(description),
      ...rest,
    };
  };

  const localeValue = useRecoilValue(localeState);

  return useMemo(() => inputs.map(localizeInput), [localeValue, inputs]);
}
