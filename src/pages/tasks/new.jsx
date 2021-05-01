import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import EditTaskPageContent from "../../pagesContent/EditTaskPageContent";
import folderTreeState from "../../recoil/states/folderTreeState";
import tasksState from "../../recoil/states/tasksState";
import teammatesState from "../../recoil/states/teammatesState";

export default function NewTask() {
  const addTask = useSetRecoilState(tasksState);

  const teammates = useRecoilValue(teammatesState);
  const lists = useRecoilValue(folderTreeState);

  return (
    <>
      <EditTaskPageContent
        initialValues={{
          assigneeValueOptions: teammates.map(({ name, lastName, id }) => {
            return { label: `${name} ${lastName[0]}.`, value: id };
          }),
          listValueOptions: lists
            .filter(({ type }) => type === "list")
            .map(({ name, id }) => {
              return { label: name, value: id };
            }),
        }}
        onSubmit={async (data) => {
          console.log(data);
          return await addTask(data);
        }}
      />
    </>
  );
}
