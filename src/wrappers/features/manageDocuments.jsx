import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import { userDataState } from '../../recoil/states/userState';
import FeatureAccess from './FeatureAccess';

function manageDocuments({
  children,
  match: {
    params: { id },
  },
}) {
  return <FeatureAccess feature="manageDocuments">{children}</FeatureAccess>;
}

manageDocuments.propTypes = {};

export default manageDocuments;
