import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import featureAccessState from '../recoil/states/featureAccessState';
import StateMonade from './StateMonade';

function FeatureMonade({ feature, children }) {
  const hasAccess = useRecoilValueLoadable(featureAccessState(feature));

  return (
    <StateMonade state={hasAccess.state}>
      {!hasAccess.contents || children}
    </StateMonade>
  );
}

FeatureMonade.propTypes = {};

export default FeatureMonade;
