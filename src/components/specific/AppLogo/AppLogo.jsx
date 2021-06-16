import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import HiddenLink from '../../generic/HiddenLink';

import styles from './AppLogo.styles';

const useStyles = createUseStyles(styles);

export default function AppLogo() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <HiddenLink to="/">
      <Logo className={classes.appLogo} />
    </HiddenLink>
  );
}
