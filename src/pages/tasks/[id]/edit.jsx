import React, { useCallback, useEffect } from 'react';

import _ from 'lodash';
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from 'recoil';
import { history } from 'umi';

import StateMonade from '../../../helpers/components/StateMonade';
import formatName from '../../../helpers/functions/formatName';
import EditTaskPageContent from '../../../pagesContent/tasks/EditTaskPageContent';
import folderTreeState from '../../../recoil/states/folderTreeState';
import statusesState from '../../../recoil/states/statusesState';
import { tasksState_update } from '../../../recoil/states/tasksState';
import teammatesState, {
  teammatesState_Raw,
} from '../../../recoil/states/teammatesState';

function EditTaskPage({
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
            template: initialValues.contents?.template.id,
            customFieldsValues: Object.fromEntries(
              Object.entries(
                initialValues.contents?.customFields || {},
              ).map(([name, { value }]) => [name, value]),
            ),
          }}
          onSubmit={async ({ customFields, ...data }) => {
            const res = await editTask({
              customFields: _.omit(customFields, ['$title']),
              ...data,
            });
            history.push(`/tasks/${id}`);
            return res;
          }}
          edit
        />
      </StateMonade>
    </>
  );
}

EditTaskPage.wrappers = ['@/wrappers/features/manageTasks'];

EditTaskPage.title = 'tasks.edit.title';

export default EditTaskPage;
