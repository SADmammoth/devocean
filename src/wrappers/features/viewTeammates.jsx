import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import { userDataState } from '../../recoil/states/userState';
import FeatureAccess from './featureAccess';

function viewTeammates({
  children,
  match: {
    params: { id },
  },
}) {
  const userData = useRecoilValue(userDataState);
  if (userData && id === userData.id) {
    return children;
  }
  return <FeatureAccess feature="viewTeammates">{children}</FeatureAccess>;
}

viewTeammates.propTypes = {};

export default viewTeammates;
