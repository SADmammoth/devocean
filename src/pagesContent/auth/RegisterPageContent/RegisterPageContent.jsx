import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';
import { history } from 'umi';

import MultiStepForm from '../../../components/generic/MultiStepForm/MultiStepForm';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getLoginForm from '../../../helpers/forms/getLoginForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import { userState_login } from '../../../recoil/states/userState';

import styles from './RegisterPageContent.styles';

const useStyles = createUseStyles(styles);

function RegisterPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm(getLoginForm());
  const login = useSetRecoilState(userState_login);

  return (
    <GridLayout>
      <Skip column={4} />
      <StackLayout column={4} className={classes.form}>
        <MultiStepForm
          steps={[
            [
              {
                type: 'text',
                label: 'Project title',
                id: 'title',
                name: 'title',
              },
              {
                type: 'textarea',
                label: 'Project description',
                id: 'description',
                name: 'description',
              },
            ],
            localizedForm,
          ]}
          onSubmit={async (data) => {
            await login(data);
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
