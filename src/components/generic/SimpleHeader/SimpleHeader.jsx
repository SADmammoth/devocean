import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';

import AppLogo from '../../specific/AppLogo/AppLogo';
import AppName from '../../specific/AppName';
import LanguageSwitcher from '../../specific/LanguageSwitcher';
import ContainerLayout from '../layouts/ContainerLayout';
import StackLayout from '../layouts/StackLayout';
import StretchLastLayout from '../layouts/StretchLastLayout';

import styles from './SimpleHeader.styles';

const useStyles = createUseStyles(styles);

const SimpleHeader = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>
        <StretchLastLayout
          gap="10px"
          className={classes.stack}
          reverse
          alignY="center">
          <StackLayout className={classes.branding} alignY="center">
            <AppLogo />
            <AppName />
          </StackLayout>

          <LanguageSwitcher />
        </StretchLastLayout>
      </ContainerLayout>
    </header>
  );
};

export default SimpleHeader;
