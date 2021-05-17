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
    {
      $title: 'tit',
      inputs: getInitTeammateProfileForm({
        hideLogin: true,
        hideWorkHours: true,
        hidePassword: true,
        hideWorkHoursSelect: true,
        hideJoinedAt: true,
        hideEmail: true,
      }),
    },
  ]);

  const setUserToken = useSetRecoilState(userState);

  const [inputs, setInputs] = useState({});

  console.log(inputs);
  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <MultiStepForm
          steps={localizedForm}
          onSubmitStep={async (step, data, proceed, end) => {
            if (step === 0) {
              const loginData = await userState_login(data);

              if (!loginData.invited) end();
            }
          }}
          onSubmit={async (data) => {
            const loginData = await userState_login(data);
            setUserToken(loginData.token);
            history.push('/');
          }}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}
          alignX="center"
          submitText="Log in">
          {/*Step 0*/}
          {inputs.login}
          {inputs.password}
          {/*Step 1*/}
          {inputs.name}
          {inputs.lastName}
          {inputs.referAs}
          {inputs.workMode}
        </MultiStepForm>
      </StackLayout>
    </GridLayout>
  );
};

export default LoginContent;
