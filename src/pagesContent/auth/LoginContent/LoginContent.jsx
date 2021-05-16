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
import userState, { userState_login } from '../../../recoil/states/userState';

import styles from './LoginContent.styles';

const useStyles = createUseStyles(styles);

const LoginContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm([
    { $title: 'tit', inputs: getLoginForm() },
    { $title: 'tit', inputs: getInitTeammateProfileForm({}) },
  ]);

  const setUserToken = useSetRecoilState(userState);

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <MultiStepForm
          steps={localizedForm}
          onSubmitStep={async (step, data, proceed, end) => {
            console.log(data);
            if (step === 0) {
              const loginData = await userState_login(data);

              if (!loginData.invited) end();
            }
          }}
          onSubmit={async () => {
            const loginData = await userState_login(data);
            setUserToken(loginData.token);
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
