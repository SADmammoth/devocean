import React from 'react';

import { useRecoilStateLoadable, useRecoilValue } from 'recoil';
import { history } from 'umi';

import StateMonade from '../../../helpers/components/StateMonade';
import formatName from '../../../helpers/functions/formatName';
import EditNotificationPageContent from '../../../pagesContent/notifications/EditNotificationPageContent';
import { notificationsState_update } from '../../../recoil/states/notificationsState';
import teammatesState, {
  teammatesState_Raw,
} from '../../../recoil/states/teammatesState';

function EditNotificationPage({ match: { params } }) {
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
            history.push(`/notifications/${id}`);
          }}
        />
      </StateMonade>
    </>
  );
}

EditNotificationPage.wrappers = ['@/wrappers/features/manageNotifications'];

EditNotificationPage.title = 'notifications.edit.title';

export default EditNotificationPage;
