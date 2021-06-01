import React from 'react';

import PropTypes from 'prop-types';

import FeatureAccess from './featureAccess';

function manageTasks({ children }) {
  return <FeatureAccess feature="manageTasks">{children}</FeatureAccess>;
}

manageTasks.propTypes = {};

export default manageTasks;
