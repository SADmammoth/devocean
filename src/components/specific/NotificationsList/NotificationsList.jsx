import React, { useMemo } from "react";
import useLocale from "../../../helpers/useLocale";
import Button from "../../generic/Button";
import { useRecoilValueLoadable } from "recoil";
import notificationsState from "../../../recoil/states/notificationsState";
import InteractiveCard from "../../generic/InteractiveCard";
import StackLayout from "../../generic/layouts/StackLayout";
import NotificationContent from "../NotificationContent";
import Interactive from "../../generic/Interactive";
import StateMonade from "../../../helpers/StateMonade";

const NotificationsList = ({ items, showCount }) => {
  const notificationsLoadable = useRecoilValueLoadable(notificationsState);
  const locale = useLocale();

  const renderNotification = ({ id, time, title, author }) => {
    return (
      <InteractiveCard key={id} link={`/notifications/${id}`}>
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
      <StateMonade state={notificationsLoadable.state}>
        <div aria-label={locale("Notifications")}>
          {notificationsToShow.map(renderNotification)}
        </div>
        {!(showCount && notShownCount > 0) || (
          <InteractiveButton link="/notifications">{`${notShownCount} more`}</InteractiveButton>
        )}
      </StateMonade>
    </StackLayout>
  );
};

export default NotificationsList;
