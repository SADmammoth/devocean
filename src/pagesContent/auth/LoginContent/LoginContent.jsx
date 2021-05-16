import React from 'react';

import classNames from 'classnames';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';
import { history } from 'umi';

import Form from '../../../components/generic/Form';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getLoginForm from '../../../helpers/forms/getLoginForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import { userState_login } from '../../../recoil/states/userState';

import styles from './LoginContent.styles';

const useStyles = createUseStyles(styles);

const LoginContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm(getLoginForm());
  const login = useSetRecoilState(userState_login);

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <Form
          inputs={localizedForm}
          onSubmit={async (data) => {
            await login(data);
            history.push('/');
          }}
          alignX="center"
          submitText="Log in"
        />
      </StackLayout>
    </GridLayout>
  );
};

export default LoginContent;
