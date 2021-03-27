import React from "react";
import NotificationPageContent from "../../pagesContent/NotificationPageContent/NotificationPageContent";
import { useRecoilValueLoadable } from "recoil";
import { notificationsState_getById } from "../../recoil/states/notificationsState";

export default function Notification({ match: { params } }) {
  const { id } = params;
  const notification = useRecoilValueLoadable(notificationsState_getById(id));

  return (
    <>
      {notification.state === "hasValue" ? (
        <NotificationPageContent {...notification.contents} />
      ) : (
        "Loading..."
      )}
    </>
  );
}
