import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useHistory } from 'umi';

import EditCollectionPageContent from '../../pagesContent/collections/EditCollectionPageContent';
import folderTreeState from '../../recoil/states/folderTreeState';

function NewCollectionPage() {
  const addCollection = useSetRecoilState(folderTreeState);
  const history = useHistory();

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
          history.push('/tasks');
        }}
      />
    </>
  );
}

NewCollectionPage.wrappers = ['@/wrappers/features/manageCollections'];

NewCollectionPage.title = 'collections.new.title';

export default NewCollectionPage;
