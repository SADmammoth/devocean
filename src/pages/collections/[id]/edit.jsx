import React from "react";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable, useRecoilValue } from "recoil";
import EditCollectionPageContent from "../../../pagesContent/EditCollectionPageContent";
import folderTreeState, {
  folderTreeState_update,
} from "../../../recoil/states/folderTreeState";

export default function EditCollection({
  match: {
    params: { id },
  },
}) {
  const [collection, editCollection] = useRecoilStateLoadable(
    folderTreeState_update(id)
  );

  const parents = useRecoilValue(folderTreeState);

  return (
    <StateMonade state={collection.state}>
      <EditCollectionPageContent
        initialValues={{
          ...collection.contents,
          color: collection.contents?.tag?.color,
          parentValueOptions: parents
            .filter(
              ({ type, id: candidateId }) =>
                type === "folder" && candidateId !== id
            )
            .map(({ name, id }) => {
              return { label: name, value: id };
            }),
        }}
        onSubmit={async (data) => {
          await editCollection(data);
        }}
      />
    </StateMonade>
  );
}
