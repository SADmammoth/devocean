import React from "react";
import { Validator } from "@sadmammoth/react-form";
import StateMonade from "../../../helpers/StateMonade";
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import EditNotificationPageContent from "../../../pagesContent/EditNotificationPageContent";
import { notificationsState_update } from "../../../recoil/states/notificationsState";
import teammatesState from "../../../recoil/states/teammatesState";

export default function EditNotification({ match: { params } }) {
  const { id } = params;
  const [notification, updateNotification] = useRecoilStateLoadable(
    notificationsState_update(id)
  );

  const teammates = useRecoilValueLoadable(teammatesState);

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
            authorValueOptions: async () => {
              const valueOptions = await teammates.toPromise();

              console.log(teammates);

              return valueOptions.map(({ name, lastName, id }) => {
                return { label: `${name} ${lastName[0]}.`, value: id };
              });
            },
          }}
          onSubmit={async (data) => {
            await updateNotification(data);
          }}
        />
      </StateMonade>
    </>
  );
}
