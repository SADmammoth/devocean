import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import DocumentContentPage from '../../../pagesContent/DocumentContentPage';
import { docsState_getById } from '../../../recoil/states/docsState';

function DocPage({
  match: {
    params: { id },
  },
}) {
  const doc = useRecoilValueLoadable(docsState_getById(id));
  return (
    <>
      <DocumentContentPage
        initialValues={doc.state === 'hasValue' ? doc.contents : {}}
      />
    </>
  );
}

DocPage.propTypes = {};

export default DocPage;
