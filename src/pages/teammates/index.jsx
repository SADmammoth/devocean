import React from 'react';

import PropTypes from 'prop-types';

import TeammatesPageContent from '../../pagesContent/teammates/TeammatesPageContent';

function Index() {
  return (
    <>
      <TeammatesPageContent />
    </>
  );
}

Index.propTypes = {};

Index.wrappers = ['@/wrappers/features/viewTeammates'];

export default Index;
