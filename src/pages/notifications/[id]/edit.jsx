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
            author: notification.contents?.author?.id,
            authorValueOptions: async () => {
              const valueOptions = await teammates.toPromise();
              //FIXME Rid of loadable
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
