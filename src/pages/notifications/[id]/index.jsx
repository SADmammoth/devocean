import React from 'react';

import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import NotificationPageContent from '../../../pagesContent/notifications/NotificationPageContent';
import { notificationsState_getById } from '../../../recoil/states/notificationsState';

function NotificationPage({ match: { params } }) {
  const { id } = params;
  const notification = useRecoilValueLoadable(notificationsState_getById(id));

  return (
    <>
      <StateMonade state={notification.state}>
        <NotificationPageContent {...notification.contents} />
      </StateMonade>
    </>
  );
}

NotificationPage.wrappers = ['@/wrappers/features/viewNotifications'];

NotificationPage.title = 'notifications.id.title';

export default NotificationPage;
