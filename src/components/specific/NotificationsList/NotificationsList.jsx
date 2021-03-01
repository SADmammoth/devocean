import React, { useEffect, useState } from "react";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import Client from "../../../helpers/Client";
import InteractiveCard from "../../generic/InteractiveCard/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import AddNotification from "../AddNotification";
import NotificationContent from "../NotificationContent";

const NotificationsList = ({ items }) => {
  const composite = useCompositeState();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const request = async () => {
      setNotifications(
        await Client.getNotifications().then(setTimeout(request, 1000))
      );
    };

    request();
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
