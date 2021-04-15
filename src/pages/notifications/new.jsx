import React from "react";
import EditNotificationPageContent from "../../pagesContent/EditNotificationPageContent";

export default function NewNotification() {
  const addNotification = useSetRecoilState(notificationsState);

  return (
    <>
      <EditNotificationPageContent
        onSubmit={async (data) => {
          await addNotification(data);
        }}
      />
    </>
  );
}
