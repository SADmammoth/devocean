import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import useLocale from '../../../helpers/hooks/useLocale';
import notificationsState from '../../../recoil/states/notificationsState';
import Button from '../../generic/Button';
import Interactive from '../../generic/Interactive';
import InteractiveCard from '../../generic/InteractiveCard';
import ScrollLayout from '../../generic/layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../../generic/layouts/StackLayout';
import NotificationCard from '../NotificationCard';

function NotificationsList({ className, showCount }) {
  const notificationsLoadable = useRecoilValueLoadable(notificationsState);
  const locale = useLocale();

  const renderNotification = ({ id, time, status, title, author }) => {
    return (
      <NotificationCard
        id={id}
        time={time}
        status={status}
        title={title}
        author={author}
      />
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
    <ScrollLayout
      className={className}
      orientation="vertical"
      scrollOrientation="vertical"
      gap="10px"
      blockSnapType="start"
      scrollPaddingStart="5px"
      nowrap>
      <StateMonade state={notificationsLoadable.state}>
        {notificationsToShow.map(renderNotification)}
        {!(showCount && notShownCount > 0) || (
          <InteractiveButton link="/notifications">{`${notShownCount} more`}</InteractiveButton>
        )}
      </StateMonade>
    </ScrollLayout>
  );
}

NotificationsList.propTypes = {
  items: PropTypes.array.isRequired,
  showCount: PropTypes.number,
};

export default NotificationsList;
