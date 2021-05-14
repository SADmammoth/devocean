import React, { useCallback, useEffect } from 'react';

import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import formatName from '../../../helpers/functions/formatName';
import EditTaskPageContent from '../../../pagesContent/tasks/EditTaskPageContent';
import folderTreeState from '../../../recoil/states/folderTreeState';
import statusesState from '../../../recoil/states/statusesState';
import { tasksState_update } from '../../../recoil/states/tasksState';
import teammatesState, {
  teammatesState_Raw,
} from '../../../recoil/states/teammatesState';

export default function EditTask({
  match: {
    params: { id },
  },
}) {
  const [initialValues, editTask] = useRecoilStateLoadable(
    tasksState_update(id),
  );

  const statuses = useRecoilValueLoadable(statusesState);

  const teammates = useRecoilValue(teammatesState_Raw);
  const lists = useRecoilValue(folderTreeState);

  return (
    <>
      <StateMonade state={initialValues.state}>
        <EditTaskPageContent
          initialValues={{
            ..._.omit(initialValues.contents || {}, 'customFields'),
            list: initialValues.contents?.list?.id,
            parent: initialValues.contents?.parent?.id,
            assigneeValueOptions: teammates.map(({ name, lastName, id }) => {
              return { label: formatName({ name, lastName }), value: id };
            }),
            listValueOptions: lists
              .filter(({ type }) => type === 'list')
              .map(({ name, id }) => {
                return { label: name, value: id };
              }),
            status: initialValues.contents?.status?.name,
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

EditTask.wrappers = ['@/wrappers/features/manageTasks'];
