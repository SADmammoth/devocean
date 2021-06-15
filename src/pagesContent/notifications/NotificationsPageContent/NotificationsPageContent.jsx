import React from 'react';

import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import ExpandableToolBar from '../../../components/generic/ExpandableToolBar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import ClockSidebar from '../../../components/specific/ClockSidebar';
import NotificationsList from '../../../components/specific/NotificationsList';
import useLocale from '../../../helpers/hooks/useLocale';
import TitledPage from '../../../layouts/TitledPage';

import styles from './NotificationsPageContent.styles';

const useStyles = createUseStyles(styles);

const NotificationsPageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const toolbar = {
    manageNotifications: [
      {
        id: 'new',
        title: locale('New notification'),
        label: <FaPlusCircle />,
        link: '/notifications/new',
      },
    ],
  };

  return (
    <TitledPage
      title={locale('Notifications')}
      isClockSidebar
      toolbarItems={toolbar}>
      <NotificationsList className={classes.notifications} />
    </TitledPage>
  );
};

export default NotificationsPageContent;
