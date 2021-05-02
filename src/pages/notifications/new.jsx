import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import formatName from "../../helpers/formatName";
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
