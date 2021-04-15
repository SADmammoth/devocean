import React from "react";
import { Validator } from "@sadmammoth/react-form";
import StateMonade from "../../../helpers/StateMonade";
import { useRecoilStateLoadable } from "recoil";
import EditNotificationPageContent from "../../../pagesContent/EditNotificationPageContent";
import {
  notificationsState_getById,
  notificationsState_update,
} from "../../../recoil/states/notificationsState";

export default function EditNotification({ match: { params } }) {
  const { id } = params;
  const [notification, updateNotification] = useRecoilStateLoadable(
    notificationsState_update(id)
  );

  return (
    <>
      <StateMonade state={notification.state}>
        <EditNotificationPageContent
          initialValues={{
            ...notification.contents,
            time: Validator.fromDateToMask(
              new Date(notification.contents?.time),
              "dd-MM-yyyy hh:mm"
            ),
            author: notification.contents?.id,
          }}
          onSubmit={async (data) => {
            await updateNotification(data);
          }}
        />
      </StateMonade>
    </>
  );
}
