import React from 'react';

import PropTypes from 'prop-types';

import FeatureAccess from './featureAccess';

function viewNotifications({ children }) {
  return <FeatureAccess feature="viewNotifications">{children}</FeatureAccess>;
}

viewNotifications.propTypes = {};

export default viewNotifications;
