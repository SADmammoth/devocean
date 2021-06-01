import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import NavList from '../../components/generic/NavList';
import Text from '../../components/generic/Text';
import GridLayout from '../../components/generic/layouts/GridLayout';
import Skip from '../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../components/generic/layouts/StackLayout';
import AppName from '../../components/specific/AppName';
import StateMonade from '../../helpers/components/StateMonade';
import useLocale from '../../helpers/hooks/useLocale';

import styles from './WelcomePageContent.styles';

const useStyles = createUseStyles(styles);

function WelcomePageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout
        column={4}
        orientation="vertical"
        className={classes.topPadding}>
        <Text className={classes.appname} type="h1" alignment="left">
          {locale('Welcome', {
            appname: (
              <>
                <br />
                <AppName locale={locale} classes={classes} />
              </>
            ),
          })}
        </Text>
        <Text type="sub" italic>
          {locale('Welcome subtitle')}
        </Text>

        <NavList
          items={[
            {
              label: 'Create new team',
              title: 'Create new team',
              id: 'register',
              link: '/auth/register',
            },
            {
              label: 'Log in',
              title: 'Log in',
              id: 'login',
              link: '/auth/login',
            },
          ]}
        />
      </StackLayout>
    </GridLayout>
  );
}

WelcomePageContent.propTypes = {};

export default WelcomePageContent;
