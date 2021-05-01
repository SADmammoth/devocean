import React, { useCallback, useEffect } from "react";
import teammatesState from "../../../recoil/states/teammatesState";
import StateMonade from "../../../helpers/StateMonade";
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import EditTaskPageContent from "../../../pagesContent/EditTaskPageContent";
import { tasksState_update } from "../../../recoil/states/tasksState";
import folderTreeState from "../../../recoil/states/folderTreeState";
import statusesState from "../../../recoil/states/statusesState";

export default function EditTask({
  match: {
    params: { id },
  },
}) {
  const [initialValues, editTask] = useRecoilStateLoadable(
    tasksState_update(id)
  );

  const statuses = useRecoilValueLoadable(statusesState);

  const teammates = useRecoilValue(teammatesState);
  const lists = useRecoilValue(folderTreeState);

  return (
    <>
      <StateMonade state={initialValues.state}>
        <EditTaskPageContent
          initialValues={{
            ...(initialValues.contents || {}),
            list: initialValues.contents?.list?.id,
            parent: initialValues.contents?.parent?.id,
            assigneeValueOptions: teammates.map(({ name, lastName, id }) => {
              return { label: `${name} ${lastName[0]}.`, value: id };
            }),
            listValueOptions: lists
              .filter(({ type }) => type === "list")
              .map(({ name, id }) => {
                return { label: name, value: id };
              }),
            status: initialValues.contents?.status,
            statusValueOptions: statuses.contents?.map(({ name }) => {
              return { label: name, value: name };
            }),
          }}
          onSubmit={async (data) => {
            return await editTask(data);
          }}
          edit
        />
      </StateMonade>
    </>
  );
}
