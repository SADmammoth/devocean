import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import EditNotificationPageContent from "../../pagesContent/EditNotificationPageContent";
import notificationsState from "../../recoil/states/notificationsState";
import teammatesState from "../../recoil/states/teammatesState";

export default function NewNotification() {
  const addNotification = useSetRecoilState(notificationsState);

  const teammates = useRecoilValue(teammatesState);

  return (
    <>
      <EditNotificationPageContent
        initialValues={{
          time: new Date(),
          authorValueOptions: teammates.map(({ name, lastName, id }) => {
            return { label: `${name} ${lastName[0]}.`, value: id };
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
