import React, { useEffect, useState } from "react";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import { useRecoilValueLoadable } from "recoil";
import notificationsState from "../../../recoil/states/notificationsState";
import InteractiveCard from "../../generic/InteractiveCard/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import AddNotification from "../AddNotification";
import NotificationContent from "../NotificationContent";

const NotificationsList = ({ items }) => {
  const composite = useCompositeState();
  const notificationsLoadable = useRecoilValueLoadable(notificationsState);

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
      {notificationsLoadable.state === "hasValue" ? (
        <Composite {...composite}>
          {notificationsLoadable.contents.map(renderNotification)}
        </Composite>
      ) : (
        "Loading..."
      )}
      <AddNotification />
    </StackLayout>
  );
};

export default NotificationsList;
