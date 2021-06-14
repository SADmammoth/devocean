import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import EditDocumentPageContent from '../../../pagesContent/docs/EditDocumentPageContent/EditDocumentPageContent';
import {
  docsState_getById,
  docsState_update,
} from '../../../recoil/states/docsState';

function EditDocPage({
  match: {
    params: { id },
  },
}) {
  const doc = useRecoilValueLoadable(docsState_getById(id));
  const editDoc = useSetRecoilState(docsState_update(id));

  return (
    <StateMonade state={doc.state}>
      <EditDocumentPageContent
        initialValues={doc.contents}
        onSubmit={(...data) => {
          editDoc(...data);
        }}
      />
    </StateMonade>
  );
}

EditDocPage.wrappers = ['@/wrappers/features/manageDocuments'];

EditDocPage.propTypes = {};

EditDocPage.title = 'documents.edit.title';

export default EditDocPage;
