import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';

import formatName from '../../../helpers/functions/formatName';
import RelativeDate from '../../../helpers/types/RelativeDate';
import { userDataState } from '../../../recoil/states/userState';
import InteractiveCard from '../../generic/InteractiveCard';
import LiveRelativeDate from '../../generic/LiveRelativeDate';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';
import Tag from './Tag';

import styles from './NotificationCard.styles';

const useStyles = createUseStyles(styles);

function NotificationCard({ id, title, status, time, author, index }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const currentUser = useRecoilValue(userDataState);

  return (
    <Tag classes={classes} tag={_.capitalize(status)}>
      <InteractiveCard
        index={index}
        link={`/notifications/${id}`}
        className={classNames(classes.notification, classes[status])}>
        <BlockDescriptionLayout>
          <BlockDescriptionLayout.Block alignY="start">
            <LiveRelativeDate
              className={classes.time}
              type="hint"
              date={time}
            />
          </BlockDescriptionLayout.Block>
          <BlockDescriptionLayout.Description>
            <Text type="small">[{formatName(author || currentUser)}]:</Text>
            <Text type="common" bold lines={2}>
              {title}
            </Text>
          </BlockDescriptionLayout.Description>
        </BlockDescriptionLayout>
      </InteractiveCard>
    </Tag>
  );
}

NotificationCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default NotificationCard;
