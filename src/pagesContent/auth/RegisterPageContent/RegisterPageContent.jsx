import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';
import { history } from 'umi';

import MultiStepForm from '../../../components/generic/MultiStepForm/MultiStepForm';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getCreateOwnProfileForm from '../../../helpers/forms/getCreateOwnProfileForm';
import getInitTeammateProfileForm from '../../../helpers/forms/getInitTeammateProfileForm';
import getLoginForm from '../../../helpers/forms/getLoginForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
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

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <MultiStepForm
          steps={[
            { $title: 'Your new account', inputs: localizedLoginForm },
            { $title: 'Your new profile', inputs: localizedNewProfileForm },
          ]}
          onSubmit={async (data) => {
            const loginData = await userState_register({
              login: data.login + '_temp',
              password: data.password,
            });

            await Client.teammateProfiles.post(
              { ...data, temporaryPassword: data.password },
              loginData.token,
            );

            await Client.user.delete(loginData.token);

            const newLoginData = await userState_register({
              login: data.login,
              password: data.password,
            });

            setUserToken(newLoginData.token);

            history.push('/');
          }}
          alignX="center"
          submitText="Register"
        />
      </StackLayout>
    </GridLayout>
  );
}

RegisterPageContent.propTypes = {};

export default RegisterPageContent;
