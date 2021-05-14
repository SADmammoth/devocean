import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';

import localeState, { validLocales } from '../../../recoil/states/localeState';
import ToggleButton from '../../generic/ToggleButton';

import styles from './LanguageSwitcher.styles';

const useStyles = createUseStyles(styles);

function LanguageSwitcher({ className }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [locale, setLocale] = useRecoilState(localeState);

  const states = useMemo(
    () =>
      validLocales.map((validLocale) => ({
        action: () => setLocale(validLocale),
        label: 'Switch to ' + validLocale,
      })),
    [validLocales],
  );

  const current = useMemo(
    () =>
      (validLocales.findIndex((candidate) => candidate === locale) + 1) %
      validLocales.length,
    [locale, validLocales],
  );

  return (
    <ToggleButton
      className={className}
      states={states}
      current={current}
      size="fluid"
    />
  );
}

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LanguageSwitcher;
