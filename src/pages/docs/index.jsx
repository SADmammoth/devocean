import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import EditDocumentPageContent from '../../pagesContent/EditDocumentPageContent/EditDocumentPageContent';
import docsState from '../../recoil/states/docsState';

function Index(props) {
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

Index.propTypes = {};

export default Index;
