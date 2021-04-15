import React from "react";
import NotificationPageContent from "../../../pagesContent/NotificationPageContent";
import { useRecoilValueLoadable } from "recoil";
import { notificationsState_getById } from "../../../recoil/states/notificationsState";
import StateMonade from "../../../helpers/StateMonade";

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
