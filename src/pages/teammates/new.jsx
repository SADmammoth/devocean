import React from 'react';

import PropTypes from 'prop-types';

import InitTeammateProfilePageContent from '../../pagesContent/InitTeammateProfilePageContent';

function New() {
  return (
    <>
      <InitTeammateProfilePageContent />
    </>
  );
}

New.propTypes = {};

New.wrappers = ['@/wrappers/features/manageTeammates'];

export default New;
