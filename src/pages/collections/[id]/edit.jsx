import React from 'react';

import { useRecoilStateLoadable, useRecoilValue } from 'recoil';
import { useHistory } from 'umi';

import StateMonade from '../../../helpers/components/StateMonade';
import EditCollectionPageContent from '../../../pagesContent/collections/EditCollectionPageContent';
import folderTreeState, {
  folderTreeState_update,
} from '../../../recoil/states/folderTreeState';

function EditCollectionPage({
  match: {
    params: { id },
  },
}) {
  const [collection, editCollection] = useRecoilStateLoadable(
    folderTreeState_update(id),
  );
  const history = useHistory();

  const parents = useRecoilValue(folderTreeState);

  return (
    <StateMonade state={collection.state}>
      <EditCollectionPageContent
        initialValues={{
          ...collection.contents,
          color: collection.contents?.color,
          parentValueOptions: parents
            .filter(
              ({ type, id: candidateId }) =>
                type === 'folder' && candidateId !== id,
            )
            .map(({ name, id }) => {
              return { label: name, value: id };
            }),
          hideType: true,
        }}
        onSubmit={async (data) => {
          await editCollection(data);
          history.push('/tasks');
        }}
        edit
      />
    </StateMonade>
  );
}

EditCollectionPage.wrappers = ['@/wrappers/features/manageCollections'];

EditCollectionPage.title = 'collections.edit.title';

export default EditCollectionPage;
