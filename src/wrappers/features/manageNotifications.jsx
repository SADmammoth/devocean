import React from 'react';

import PropTypes from 'prop-types';

import FeatureAccess from './featureAccess';

function manageNotifications({ children }) {
  return (
    <FeatureAccess feature="manageNotifications">{children}</FeatureAccess>
  );
}

manageNotifications.propTypes = {};

export default manageNotifications;
