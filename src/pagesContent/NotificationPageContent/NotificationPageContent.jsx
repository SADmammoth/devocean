import React from "react";

import LiveRelativeDate from "../../components/generic/LiveRelativeDate";

import PropTypes from "prop-types";
import Text from "../../components/generic/Text";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Skip from "../../components/generic/layouts/GridLayout/Skip";
import Sidebar from "../../components/generic/Sidebar";
import GridLayout from "../../components/generic/layouts/GridLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationPageContent.styles";
import ClockSidebar from "../../components/specific/ClockSidebar";
import Button from "../../components/generic/Button";
import { useSetRecoilState } from "recoil";
import { notificationsState_cancel } from "../../recoil/states/notificationsState";
import useLocale from "../../helpers/useLocale";
import Interactive from "../../components/generic/Interactive";
import RelativeDate from "../../helpers/RelativeDate";
import formatName from "../../helpers/formatName";

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
      <Sidebar column={3} className={classes.sidebar}>
        <StackLayout>
          <Text type="common">
            {locale("Status", {
              status: <Text type="common">{locale(status)}</Text>,
            })}
          </Text>
        </StackLayout>
        <InteractiveButton link={`${id}/edit`}>
          {locale("Update")}
        </InteractiveButton>
        <Button
          onClick={() => {
            cancelNotification(id);
          }}
        >
          {locale("Cancel")}
        </Button>
      </Sidebar>
      <Skip column={1} />
      <StackLayout
        column={3}
        orientation="vertical"
        className={classes.topPadding}
      >
        <Text type="h1" alignment="left">
          {title}
        </Text>
        <StackLayout gap="5px">
          {!time || <LiveRelativeDate type="sub" italic date={time} />}
          <Text type="sub" italic>{`by ${!author || formatName(author)}`}</Text>
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
