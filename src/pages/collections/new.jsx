import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { history } from 'umi';

import EditCollectionPageContent from '../../pagesContent/collections/EditCollectionPageContent';
import folderTreeState from '../../recoil/states/folderTreeState';

function NewCollection() {
  const addCollection = useSetRecoilState(folderTreeState);

  const parents = useRecoilValue(folderTreeState);

  return (
    <>
      <EditCollectionPageContent
        initialValues={{
          parentValueOptions: parents
            .filter(({ type, id: candidateId }) => type === 'folder')
            .map(({ name, id }) => {
              return { label: name, value: id };
            }),
        }}
        onSubmit={async (data) => {
          await addCollection(data);
        }}
      />
    </>
  );
}

NewCollection.wrappers = ['@/wrappers/features/manageCollections'];

export default NewCollection;
