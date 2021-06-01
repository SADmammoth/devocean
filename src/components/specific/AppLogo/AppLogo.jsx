import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import logo from '../../../assets/images/logo.png';
import HiddenLink from '../../generic/HiddenLink';

import styles from './AppLogo.styles';

const useStyles = createUseStyles(styles);

export default function AppLogo() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <HiddenLink to="/">
      <img
        className={classes.appLogo}
        src={logo}
        alt="DEVocean"
        title="DEVocean"
      />
    </HiddenLink>
  );
}
