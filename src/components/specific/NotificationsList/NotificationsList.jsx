import React, { useEffect, useMemo, useState } from "react";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import { useRecoilValueLoadable } from "recoil";
import notificationsState from "../../../recoil/states/notificationsState";
import InteractiveCard from "../../generic/InteractiveCard/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import NotificationContent from "../NotificationContent";
import Interactive from "../../generic/Interactive";

const NotificationsList = ({ items, showCount }) => {
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

  const notificationsToShow = useMemo(() => {
    if (notificationsLoadable.state === "hasValue") {
      if (showCount) {
        return notificationsLoadable.contents.slice(0, showCount);
      }
      return notificationsLoadable.contents;
    }
    return [];
  }, [notificationsLoadable]);

  const notShownCount = useMemo(
    () => notificationsLoadable.contents.length - notificationsToShow.length,
    [notificationsLoadable, notificationsToShow]
  );

  return (
    <StackLayout orientation="vertical" gap="10px">
      {notificationsLoadable.state === "hasValue" ? (
        <Composite {...composite}>
          {notificationsToShow.map(renderNotification)}
          {!(showCount && notShownCount > 0) ||
            Interactive(
              <CompositeItem
                {...composite}
              >{`${notShownCount} more`}</CompositeItem>,
              { link: "/notifications" }
            )}
        </Composite>
      ) : (
        "Loading..."
      )}
    </StackLayout>
  );
};

export default NotificationsList;
