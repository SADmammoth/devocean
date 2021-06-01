import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import { userDataState } from '../../recoil/states/userState';
import FeatureAccess from './featureAccess';

function viewDocuments({
  children,
  match: {
    params: { id },
  },
}) {
  return <FeatureAccess feature="viewDocuments">{children}</FeatureAccess>;
}

viewDocuments.propTypes = {};

export default viewDocuments;
