import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';

import AppLogo from '../../specific/AppLogo/AppLogo';
import AppName from '../../specific/AppName';
import LanguageSwitcher from '../../specific/LanguageSwitcher';
import ContainerLayout from '../layouts/ContainerLayout';
import GridLayout from '../layouts/GridLayout';
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
        <GridLayout stretchLast>
          <StackLayout
            column={3}
            className={classes.branding}
            alignY="center"
            alignX="center">
            <AppLogo />
            {/* <AppName /> */}
          </StackLayout>

          <StackLayout alignX="end" alignY="center" gap="10px">
            <LanguageSwitcher />
          </StackLayout>
        </GridLayout>
      </ContainerLayout>
    </header>
  );
};

export default SimpleHeader;
