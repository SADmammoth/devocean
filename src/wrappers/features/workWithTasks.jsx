import React from 'react';

import PropTypes from 'prop-types';

function workWithTasks({ children }) {
  return <FeatureAccess feature="workWithTasks">{children}</FeatureAccess>;
}

workWithTasks.propTypes = {};

export default workWithTasks;
