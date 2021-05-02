import React from "react";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable, useRecoilValue } from "recoil";
import EditNotificationPageContent from "../../../pagesContent/EditNotificationPageContent";
import { notificationsState_update } from "../../../recoil/states/notificationsState";
import teammatesState from "../../../recoil/states/teammatesState";
import formatName from "../../../helpers/formatName";

export default function EditNotification({ match: { params } }) {
  const { id } = params;
  const [notification, updateNotification] = useRecoilStateLoadable(
    notificationsState_update(id)
  );

  const teammates = useRecoilValue(teammatesState);

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
          }}
        />
      </StateMonade>
    </>
  );
}
