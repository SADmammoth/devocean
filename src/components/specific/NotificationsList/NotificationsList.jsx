import React from "react";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import InteractiveCard from "../../generic/InteractiveCard/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import NotificationContent from "../NotificationContent";

const NotificationsList = ({ items }) => {
  const composite = useCompositeState();

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
      <Composite {...composite}>{items.map(renderNotification)}</Composite>
    </StackLayout>
  );
};

export default NotificationsList;
