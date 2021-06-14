import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { history } from 'umi';

import formatName from '../../helpers/functions/formatName';
import EditNotificationPageContent from '../../pagesContent/notifications/EditNotificationPageContent';
import notificationsState from '../../recoil/states/notificationsState';
import teammatesState, {
  teammatesState_Raw,
} from '../../recoil/states/teammatesState';

function NewNotificationPage() {
  const addNotification = useSetRecoilState(notificationsState);

  const teammates = useRecoilValue(teammatesState_Raw);

  return (
    <>
      <EditNotificationPageContent
        initialValues={{
          time: new Date(),
          authorValueOptions: teammates.map(({ name, lastName, id }) => {
            return {
              label: formatName({ name, lastName }),
              value: { id, name, lastName },
            };
          }),
        }}
        isCreatingNew={true}
        onSubmit={async (data) => {
          await addNotification(data);
          history.push('/notifications');
        }}
      />
    </>
  );
}

NewNotificationPage.wrappers = ['@/wrappers/features/manageNotifications'];

NewNotificationPage.title = 'notifications.new.title';

export default NewNotificationPage;
