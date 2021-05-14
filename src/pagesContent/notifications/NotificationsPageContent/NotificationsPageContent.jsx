import React from 'react';

import classNames from 'classnames';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import ExpandableToolBar from '../../../components/generic/ExpandableToolBar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import StretchLayout from '../../../components/generic/layouts/StretchLayout';
import ClockSidebar from '../../../components/specific/ClockSidebar';
import NotificationsList from '../../../components/specific/NotificationsList';
import useLocale from '../../../helpers/hooks/useLocale';

import styles from './NotificationsPageContent.styles';

const useStyles = createUseStyles(styles);

const NotificationsPageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <>
      <GridLayout className={classes.content} stretchLast>
        <ClockSidebar column={3} className={classes.sidebar} />
        <StackLayout
          orientation="vertical"
          className={classes.marginTop}
          alignX="start"
          column={8}>
          <Text type="h1Small">{locale('Notifications')}</Text>
          <StretchLayout>
            <NotificationsList />
          </StretchLayout>
        </StackLayout>
        <ExpandableToolBar
          name={'Notifications toolbar'}
          className={classes.marginTop}
          items={[
            {
              id: 'new',
              title: locale('New notification'),
              label: <FaPlusCircle className={classes.icon} />,
              link: '/notifications/new',
            },
          ]}
        />
      </GridLayout>
    </>
  );
};

export default NotificationsPageContent;
