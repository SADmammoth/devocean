import React from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'umi';

function hiddenPage() {
  return <Redirect to="404" />;
}

hiddenPage.propTypes = {};

export default hiddenPage;
