import React from 'react';

import PropTypes from 'prop-types';

import FeatureAccess from './FeatureAccess';

function viewTasks({ children }) {
  return <FeatureAccess feature="viewTasks">{children}</FeatureAccess>;
}

viewTasks.propTypes = {};

export default viewTasks;
