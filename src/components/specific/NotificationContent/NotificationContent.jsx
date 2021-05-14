import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import formatName from '../../../helpers/functions/formatName';
import RelativeDate from '../../../helpers/types/RelativeDate';
import InteractiveCard from '../../generic/InteractiveCard';
import LiveRelativeDate from '../../generic/LiveRelativeDate';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';

import styles from './NotificationContent.styles';

const useStyles = createUseStyles(styles);

function NotificationContent({ title, time, author }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block alignY="start">
        <LiveRelativeDate className={classes.time} type="hint" date={time} />
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="small">[{formatName(author)}]:</Text>
        <Text type="common" bold>
          {title}
        </Text>
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
}

NotificationContent.propTypes = {
  title: PropTypes.string,
  time: PropTypes.shape({
    toString: PropTypes.func,
  }),
  author: PropTypes.string,
};

export default NotificationContent;
