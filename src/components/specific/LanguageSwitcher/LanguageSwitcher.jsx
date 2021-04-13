import React, { useMemo } from "react";
import ToggleButton from "../../generic/ToggleButton";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilState } from "recoil";
import localeState, { validLocales } from "../../../recoil/states/localeState";
import styles from "./LanguageSwitcher.styles";

const useStyles = createUseStyles(styles);

const LanguageSwitcher = ({ className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [locale, setLocale] = useRecoilState(localeState);

  const states = useMemo(
    () =>
      validLocales.map((validLocale) => ({
        action: () => setLocale(validLocale),
        label: validLocale,
      })),
    [validLocales]
  );

  const current = useMemo(
    () => validLocales.findIndex((candidate) => candidate === locale),
    [locale, validLocales]
  );

  return (
    <ToggleButton
      className={className}
      states={states}
      current={current}
      size="fluid"
    />
  );
};

export default LanguageSwitcher;
