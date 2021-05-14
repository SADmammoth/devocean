import React from 'react';

import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import NotificationPageContent from '../../../pagesContent/notifications/NotificationPageContent';
import { notificationsState_getById } from '../../../recoil/states/notificationsState';

export default function Notification({ match: { params } }) {
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
