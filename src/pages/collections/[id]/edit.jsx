import React from "react";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable } from "recoil";
import EditCollectionPageContent from "../../../pagesContent/EditCollectionPageContent";
import { folderTreeState_update } from "../../../recoil/states/folderTreeState";

export default function EditCollection({
  match: {
    params: { id },
  },
}) {
  const [collection, editCollection] = useRecoilStateLoadable(
    folderTreeState_update(id)
  );

  return (
    <StateMonade state={collection.state}>
      <EditCollectionPageContent
        initialValues={{
          ...collection.contents,
          color: collection.contents?.tag?.color,
        }}
        onSubmit={async (data) => {
          await editCollection(data);
        }}
      />
    </StateMonade>
  );
}
