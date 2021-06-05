import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import useLocale from '../../../helpers/hooks/useLocale';
import notificationsState from '../../../recoil/states/notificationsState';
import Button from '../../generic/Button';
import Interactive from '../../generic/Interactive';
import InteractiveCard from '../../generic/InteractiveCard';
import ItemsList from '../../generic/ItemsList';
import LoadableItemsList from '../../generic/LoadableItemsList';
import ScrollLayout from '../../generic/layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../../generic/layouts/StackLayout';
import NotificationCard from '../NotificationCard';

function NotificationsList({ className, showCount }) {
  const notificationsLoadable = useRecoilValueLoadable(notificationsState);
  const locale = useLocale();

  const renderNotification = ({ id, time, status, title, author }) => {
    return (
      <NotificationCard
        key={id}
        id={id}
        time={time}
        status={status}
        title={title}
        author={author}
      />
    );
  };

  const InteractiveButton = Interactive(Button);

  const ItemsContainer = ({ children }) => (
    <ScrollLayout
      className={className}
      orientation="vertical"
      scrollOrientation="vertical"
      gap="10px"
      blockSnapType="start"
      scrollPaddingStart="5px"
      nowrap>
      {children.slice(0, showCount || -1)}
      {!(showCount && children.length - showCount > 0) || (
        <InteractiveButton link="/notifications">{`${
          children.length - showCount
        } more`}</InteractiveButton>
      )}
    </ScrollLayout>
  );

  return (
    <LoadableItemsList
      showCount={showCount}
      as={ItemsContainer}
      items={notificationsLoadable}
      renderItem={renderNotification}
      emptyMessage={'Currently no notifications received'}
    />
  );
}

NotificationsList.propTypes = {
  showCount: PropTypes.number,
};

export default NotificationsList;
