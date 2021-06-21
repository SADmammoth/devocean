import React, { useState } from 'react';

import classNames from 'classnames';
import { useTheme, createUseStyles } from 'react-jss';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
  useRecoilCallback,
} from 'recoil';
import { history } from 'umi';

import Form from '../../../components/generic/Form';
import MultiStepForm from '../../../components/generic/MultiStepForm';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getInitTeammateProfileForm from '../../../helpers/forms/getInitTeammateProfileForm';
import getLoginForm from '../../../helpers/forms/getLoginForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import Client from '../../../helpers/services/Client';
import serverStateSync from '../../../recoil/helpers/effects/serverStateSync';
import userState, { userState_login } from '../../../recoil/states/userState';

import styles from './LoginContent.styles';

const useStyles = createUseStyles(styles);

const LoginContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm(getLoginForm());

  const setUserToken = useSetRecoilState(userState);

  const [inputs, setInputs] = useState({});

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <Form
          inputs={localizedForm}
          onSubmit={async (data) => {
            const loginData = await userState_login(data);
            setUserToken(loginData.token);
            localStorage.setItem('userState_', loginData.token);
            !serverStateSync.handSync['navitemsState_'] ||
              serverStateSync.handSync['navitemsState_']();
            history.push('/');
          }}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}
          alignX="center"
          submitText="Log in">
          {inputs.login}
          {inputs.password}
        </Form>
      </StackLayout>
    </GridLayout>
  );
};

export default LoginContent;
