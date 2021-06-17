import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { userDataState } from '../../recoil/states/userState';
import FeatureAccess from './FeatureAccess';

function manageTeammates({
  children,
  match: {
    params: { id },
  },
}) {
  const userData = useRecoilValueLoadable(userDataState);
  if (userData.contents && id === userData.contents?.id) {
    return children;
  }
  return <FeatureAccess feature="manageTeammates">{children}</FeatureAccess>;
}

manageTeammates.propTypes = {};

export default manageTeammates;
