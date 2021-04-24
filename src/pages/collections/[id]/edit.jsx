import React from "react";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import EditCollectionPageContent from "../../../pagesContent/EditCollectionPageContent";
import folderTreeState, {
  folderTreeState_update,
} from "../../../recoil/states/folderTreeState";
import { useRecoilValue } from "recoil";

export default function EditCollection({
  match: {
    params: { id },
  },
}) {
  const [collection, editCollection] = useRecoilStateLoadable(
    folderTreeState_update(id)
  );

  const parents = useRecoilValueLoadable(folderTreeState);

  return (
    <StateMonade state={collection.state}>
      <EditCollectionPageContent
        initialValues={{
          ...collection.contents,
          color: collection.contents?.tag?.color,
          parentValueOptions: async () => {
            const valueOptions = await parents.toPromise();
            console.log(parents);
            //FIXME Rid of loadable
            return valueOptions
              .filter(
                ({ type, id: candidateId }) =>
                  type === "folder" && candidateId !== id
              )
              .map(({ name, id }) => {
                return { label: name, value: id };
              });
          },
        }}
        onSubmit={async (data) => {
          console.log(data);
          await editCollection(data);
        }}
      />
    </StateMonade>
  );
}
