import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/StateMonade';
import useLocale from '../../../helpers/useLocale';
import notificationsState from '../../../recoil/states/notificationsState';
import Button from '../../generic/Button';
import Interactive from '../../generic/Interactive';
import InteractiveCard from '../../generic/InteractiveCard';
import StackLayout from '../../generic/layouts/StackLayout';
import NotificationContent from '../NotificationContent';

function NotificationsList({ items, showCount }) {
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
    if (notificationsLoadable.state === 'hasValue') {
      if (showCount) {
        return notificationsLoadable.contents.slice(0, showCount);
      }
      return notificationsLoadable.contents;
    }
    return [];
  }, [notificationsLoadable]);

  console.log(notificationsLoadable, notificationsToShow);

  const notShownCount = useMemo(
    () => notificationsLoadable.contents.length - notificationsToShow.length,
    [notificationsLoadable, notificationsToShow],
  );

  const InteractiveButton = Interactive(Button);

  return (
    <StackLayout
      aria-label={locale('Notifications')}
      orientation="vertical"
      gap="10px">
      <StateMonade state={notificationsLoadable.state}>
        {notificationsToShow.map(renderNotification)}
        {!(showCount && notShownCount > 0) || (
          <InteractiveButton link="/notifications">{`${notShownCount} more`}</InteractiveButton>
        )}
      </StateMonade>
    </StackLayout>
  );
}

NotificationsList.propTypes = {
  items: PropTypes.array.isRequired,
  showCount: PropTypes.number,
};

export default NotificationsList;
