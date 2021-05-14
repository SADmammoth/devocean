import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import formatName from '../../helpers/functions/formatName';
import EditNotificationPageContent from '../../pagesContent/notifications/EditNotificationPageContent';
import notificationsState from '../../recoil/states/notificationsState';
import teammatesState, {
  teammatesState_Raw,
} from '../../recoil/states/teammatesState';

function NewNotification() {
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
        }}
      />
    </>
  );
}

NewNotification.wrappers = ['@/wrappers/features/manageNotifications'];

export default NewNotification;
