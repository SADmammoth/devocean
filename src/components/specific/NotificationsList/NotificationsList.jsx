import React, { useEffect, useState } from "react";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import { useRecoilState } from "recoil";
import notificationsState from "../../../recoil/atoms/notificationsState";
import Client from "../../../helpers/Client";
import InteractiveCard from "../../generic/InteractiveCard/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import AddNotification from "../AddNotification";
import NotificationContent from "../NotificationContent";
import notificationsFaked from "./notificationsFaked";

const NotificationsList = ({ items }) => {
  const composite = useCompositeState();
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  useEffect(() => {
    setNotifications(notificationsFaked);
  }, []);

  const renderNotification = ({ id, time, title, author }) => {
    return (
      <InteractiveCard composite={composite} link={id}>
        <NotificationContent
          time={time}
          title={title}
          author={author}
          composite={composite}
        />
      </InteractiveCard>
    );
  };

  return (
    <StackLayout orientation="vertical" gap="10px">
      <Composite {...composite}>
        {notifications.map(renderNotification)}
      </Composite>
      <AddNotification />
    </StackLayout>
  );
};

export default NotificationsList;
