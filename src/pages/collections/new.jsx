import React from "react";
import { useSetRecoilState } from "recoil";
import EditCollectionPageContent from "../../pagesContent/EditCollectionPageContent";
import folderTreeState from "../../recoil/states/folderTreeState";

export default function NewCollection() {
  const addCollection = useSetRecoilState(folderTreeState);

  return (
    <>
      <EditCollectionPageContent
        onSubmit={async (data) => {
          await addCollection(data);
        }}
      />
    </>
  );
}
