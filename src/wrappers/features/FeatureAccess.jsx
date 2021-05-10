import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { Redirect } from 'umi';

import StateMonade from '../../helpers/StateMonade';
import featureAccessState from '../../recoil/states/featureAccessState';

function FeatureAccess({ children, feature }) {
  const hasAccess = useRecoilValueLoadable(featureAccessState(feature));

  return (
    <StateMonade state={hasAccess.state}>
      {hasAccess.contents ? children : <Redirect to="/404" />}
    </StateMonade>
  );
}

FeatureAccess.propTypes = {};

export default FeatureAccess;
