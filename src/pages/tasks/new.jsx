import React from "react";
import CreateTaskPageContent from "../../pagesContent/EditTaskPageContent";

export default function NewTask() {
  const addTask = useSetRecoilState(tasksState);

  return (
    <>
      <EditTaskPageContent
        onSubmit={async (data) => {
          return await addTask(data);
        }}
      />
    </>
  );
}
