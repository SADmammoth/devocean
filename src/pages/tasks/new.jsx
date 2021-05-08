import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import formatName from "../../helpers/formatName";
import EditTaskPageContent from "../../pagesContent/EditTaskPageContent";
import folderTreeState from "../../recoil/states/folderTreeState";
import tasksState from "../../recoil/states/tasksState";
import { teammatesState_Raw } from "../../recoil/states/teammatesState";

export default function NewTask() {
  const addTask = useSetRecoilState(tasksState);

  const teammates = useRecoilValue(teammatesState_Raw);
  const lists = useRecoilValue(folderTreeState);

  return (
    <>
      <EditTaskPageContent
        initialValues={{
          assigneeValueOptions: teammates.map(({ name, lastName, id }) => {
            return { label: formatName({ name, lastName }), value: id };
          }),
          listValueOptions: lists
            .filter(({ type }) => type === "list")
            .map(({ name, id }) => {
              return { label: name, value: id };
            }),
        }}
        onSubmit={async ({ customFields: { $title, ...fields }, ...data }) => {
          return await addTask({
            ...data,
            customFields: fields,
          });
        }}
      />
    </>
  );
}
