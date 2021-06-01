import React from 'react';

import PropTypes from 'prop-types';

import DocumentsPageContent from '../../pagesContent/docs/DocumentsPageContent';

function Index(props) {
  return (
    <>
      <DocumentsPageContent />
    </>
  );
}

Index.propTypes = {};

Index.wrappers = ['@/wrappers/features/viewDocuments'];

export default Index;
