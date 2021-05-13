import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import EditDocumentPageContent from '../../pagesContent/EditDocumentPageContent/EditDocumentPageContent';
import docsState from '../../recoil/states/docsState';

function NewDoc(props) {
  const addDoc = useSetRecoilState(docsState);
  return (
    <>
      <EditDocumentPageContent
        onSubmit={async (data) => {
          console.log(data);
          return await addDoc(data);
        }}
      />
    </>
  );
}

NewDoc.propTypes = {};

export default NewDoc;