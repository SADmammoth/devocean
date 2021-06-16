import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';
import { history } from 'umi';

import FormToast from '../../../components/generic/FormToast/FormToast';
import MultiStepForm from '../../../components/generic/MultiStepForm/MultiStepForm';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getCreateOwnProfileForm from '../../../helpers/forms/getCreateOwnProfileForm';
import getInitTeammateProfileForm from '../../../helpers/forms/getInitTeammateProfileForm';
import getLoginForm from '../../../helpers/forms/getLoginForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import useArrayState from '../../../helpers/hooks/useArrayState';
import Client from '../../../helpers/services/Client';
import userState, {
  userState_login,
  userState_register,
} from '../../../recoil/states/userState';

import styles from './RegisterPageContent.styles';

const useStyles = createUseStyles(styles);

function RegisterPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedLoginForm = useLocalizedForm(getLoginForm());
  const localizedNewProfileForm = useLocalizedForm(getCreateOwnProfileForm());
  const setUserToken = useSetRecoilState(userState);

  const [tempToken, setTempToken] = useState(null);

  const submitForm = useCallback(
    async (data) => {
      await Client.teammateProfiles.post(
        { ...data, temporaryPassword: data.password },
        tempToken,
      );

      await Client.user.delete(tempToken);

      const newLoginData = await userState_login({
        login: data.login,
        password: data.password,
      });

      setUserToken(newLoginData.token);

      history.push('/');
    },
    [tempToken],
  );

  const [
    notifications,
    addNotification,
    closeNotification,
    clearNotifications,
  ] = useArrayState(0);

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <MultiStepForm
          notify={(type, message) => {
            if (type === 'error') {
              console.log(type, message);
              clearNotifications();
              addNotification({ type, message });
            }
          }}
          steps={[
            { $title: 'Your new account', inputs: localizedLoginForm },
            { $title: 'Your new profile', inputs: localizedNewProfileForm },
          ]}
          onSubmitStep={async (step, data, proceed, end) => {
            if (!step)
              return await userState_register({
                login: data.login + '_temp',
                password: data.password,
              }).then((loginData) => {
                setTempToken(loginData.token);
                proceed();
              });
          }}
          onSubmit={submitForm}
          alignX="center"
          submitText="Register"
        />
      </StackLayout>
      <StackLayout
        className={classes.notifications}
        column={3}
        orientation="vertical"
        alignY="start"
        gap="10px">
        {notifications.map(({ id, type, message }, index) => {
          console.log(id);
          return (
            <FormToast
              key={id}
              type={type}
              message={message}
              onClose={() => closeNotification(id)}
            />
          );
        })}
      </StackLayout>
    </GridLayout>
  );
}

RegisterPageContent.propTypes = {};

export default RegisterPageContent;
