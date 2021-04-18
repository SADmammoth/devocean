import React from "react";
import EditNotificationPageContent from "../../pagesContent/EditNotificationPageContent";

export default function NewNotification() {
  const addNotification = useSetRecoilState(notificationsState);

  return (
    <>
      <EditNotificationPageContent
        isCreatingNew={true}
        onSubmit={async (data) => {
          await addNotification(data);
        }}
      />
    </>
  );
}
