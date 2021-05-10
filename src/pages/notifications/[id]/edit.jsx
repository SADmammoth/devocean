import React from 'react';

import { useRecoilStateLoadable, useRecoilValue } from 'recoil';

import StateMonade from '../../../helpers/StateMonade';
import formatName from '../../../helpers/formatName';
import EditNotificationPageContent from '../../../pagesContent/EditNotificationPageContent';
import { notificationsState_update } from '../../../recoil/states/notificationsState';
import teammatesState, {
  teammatesState_Raw,
} from '../../../recoil/states/teammatesState';

function EditNotification({ match: { params } }) {
  const { id } = params;
  const [notification, updateNotification] = useRecoilStateLoadable(
    notificationsState_update(id),
  );

  const teammates = useRecoilValue(teammatesState_Raw);

  return (
    <>
      <StateMonade state={notification.state}>
        <EditNotificationPageContent
          initialValues={{
            ...notification.contents,
            author: notification.contents?.author,
            authorValueOptions: teammates.map(({ name, lastName, id }) => {
              return {
                label: formatName({ name, lastName }),
                value: { id, name, lastName },
              };
            }),
          }}
          onSubmit={async (data) => {
            await updateNotification(data);
          }}
        />
      </StateMonade>
    </>
  );
}

EditNotification.wrappers = ['@/wrappers/features/manageNotifications'];

export default EditNotification;
