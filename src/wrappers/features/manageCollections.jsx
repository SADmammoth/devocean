import React from 'react';

import PropTypes from 'prop-types';

import FeatureAccess from './featureAccess';

function manageCollections({ children }) {
  return <FeatureAccess feature="manageCollections">{children}</FeatureAccess>;
}

manageCollections.propTypes = {};

export default manageCollections;
