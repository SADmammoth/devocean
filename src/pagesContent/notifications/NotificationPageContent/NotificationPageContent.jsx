import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import Button from '../../../components/generic/Button';
import Interactive from '../../../components/generic/Interactive';
import LiveRelativeDate from '../../../components/generic/LiveRelativeDate';
import PanelCard from '../../../components/generic/PanelCard';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import ClockSidebar from '../../../components/specific/ClockSidebar';
import FeatureMonade from '../../../helpers/components/FeatureMonade';
import showPopup from '../../../helpers/components/showPopup';
import formatName from '../../../helpers/functions/formatName';
import useLocale from '../../../helpers/hooks/useLocale';
import RelativeDate from '../../../helpers/types/RelativeDate';
import { notificationsState_cancel } from '../../../recoil/states/notificationsState';

import styles from './NotificationPageContent.styles';

const useStyles = createUseStyles(styles);

function NotificationPageContent({
  id,
  title,
  time,
  author,
  status,
  fullText,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const InteractiveButton = Interactive(Button);

  const cancelNotification = useSetRecoilState(notificationsState_cancel(id));

  return (
    <GridLayout className={classes.content} stretchLast>
      <Sidebar
        column={3}
        className={classNames(classes.sidebar, classes.paddingTop)}>
        <StackLayout orientation="vertical" gap="10px">
          {status ? (
            <PanelCard>
              <Text type="common">{locale(status)}</Text>
            </PanelCard>
          ) : null}
          <FeatureMonade feature={'manageNotifications'}>
            <InteractiveButton link={`${id}/edit`}>
              {locale('Update')}
            </InteractiveButton>
            <Button
              onClick={async () => {
                const approved = await showPopup({
                  children: [
                    <Text type="common">
                      {
                        locale('Confirm cancel', {
                          title,
                        }) /* Do you really like to cancel notification "{title}"?*/
                      }
                    </Text>,
                  ],
                  closeButtonContent: locale('Yes'),
                  cancelText: locale('No'),
                });
                if (approved) {
                  cancelNotification(id);
                }
              }}>
              {locale('Cancel')}
            </Button>
          </FeatureMonade>
        </StackLayout>
      </Sidebar>
      <Skip column={1} />
      <StackLayout
        column={5}
        orientation="vertical"
        className={classes.paddingTop}
        gap="10px">
        <Text type="h1" className={classes.cleanHeading}>
          {title}
        </Text>
        <StackLayout gap="5px">
          {!time || <LiveRelativeDate type="common" italic date={time} />}
          <Text type="common" italic>{`by ${
            !author || formatName(author)
          }`}</Text>
        </StackLayout>
        <Text type="common">{fullText}</Text>
      </StackLayout>
    </GridLayout>
  );
}

NotificationPageContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  author: PropTypes.string,
  status: PropTypes.string,
};

export default NotificationPageContent;
