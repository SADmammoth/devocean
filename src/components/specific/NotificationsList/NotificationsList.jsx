import React, { useEffect, useMemo, useState } from "react";

import useLocale from "../../../helpers/useLocale";

import Button from "../../generic/Button";
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
  const locale = useLocale();

  const renderNotification = ({ id, time, title, author }) => {
    return (
      <InteractiveCard
        key={id}
        composite={composite}
        link={`/notifications/${id}`}
      >
        <NotificationContent time={time} title={title} author={author} />
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

  const InteractiveButton = Interactive(Button);

  return (
    <StackLayout orientation="vertical" gap="10px">
      {notificationsLoadable.state === "hasValue" ? (
        <>
          <Composite {...composite} aria-label={locale("Notifications")}>
            {notificationsToShow.map(renderNotification)}
          </Composite>
          {!(showCount && notShownCount > 0) || (
            <InteractiveButton
              link="/notifications"
              {...composite}
            >{`${notShownCount} more`}</InteractiveButton>
          )}
        </>
      ) : (
        "Loading..."
      )}
    </StackLayout>
  );
};

export default NotificationsList;
