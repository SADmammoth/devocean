import React from 'react';

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

import styles from './NotificationCard.styles';

const useStyles = createUseStyles(styles);

function NotificationCard({ title, time, author }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const currentUser = useRecoilValue(userDataState);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block alignY="start">
        <LiveRelativeDate className={classes.time} type="hint" date={time} />
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="small">[{formatName(author || currentUser)}]:</Text>
        <Text type="common" bold>
          {title}
        </Text>
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
}

NotificationCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.shape({
    toString: PropTypes.func,
  }),
  author: PropTypes.string,
};

export default NotificationCard;
