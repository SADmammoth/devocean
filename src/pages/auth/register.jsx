import React from 'react';

import PropTypes from 'prop-types';
import { intl } from 'umi';

import locales from '../../helpers/functions/locales';
import RegisterPageContent from '../../pagesContent/auth/RegisterPageContent';

function RegisterPage(props) {
  return (
    <>
      <RegisterPageContent />
    </>
  );
}

RegisterPage.propTypes = {};

RegisterPage.title = 'register.title';

export default RegisterPage;
