import React from 'react';

import NotificationsPageContent from '../../pagesContent/notifications/NotificationsPageContent';

function NotificationsPage() {
  return (
    <>
      <NotificationsPageContent />
    </>
  );
}

NotificationsPage.wrappers = ['@/wrappers/features/viewNotifications'];

NotificationsPage.title = 'notifications.title';

export default NotificationsPage;
