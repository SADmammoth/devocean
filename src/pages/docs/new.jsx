import React from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import EditDocumentPageContent from '../../pagesContent/docs/EditDocumentPageContent';
import docsState from '../../recoil/states/docsState';

function NewDocPage(props) {
  const addDoc = useSetRecoilState(docsState);
  return (
    <>
      <EditDocumentPageContent
        onSubmit={async (data) => {
          return await addDoc(data);
        }}
      />
    </>
  );
}

NewDocPage.propTypes = {};

NewDocPage.wrappers = ['@/wrappers/features/manageDocuments'];

NewDocPage.title = 'documents.new.title';

export default NewDocPage;
