import React from "react";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable } from "recoil";
import EditTaskPageContent from "../../../pagesContent/EditTaskPageContent";
import { tasksState_update } from "../../../recoil/states/tasksState";

export default function EditTask({
  match: {
    params: { id },
  },
}) {
  const [initialValues, editTask] = useRecoilStateLoadable(
    tasksState_update(id)
  );

  return (
    <>
      <StateMonade state={initialValues.state}>
        <EditTaskPageContent
          initialValues={initialValues.contents || {}}
          onSubmit={async (data) => {
            return await editTask(data);
          }}
          edit
        />
      </StateMonade>
    </>
  );
}
