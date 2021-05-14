import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import PanelCard from '../../generic/PanelCard';
import Text from '../../generic/Text';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';

import styles from './DiscussionCard.styles';

const useStyles = createUseStyles(styles);

function DiscussionCard({ id, author, text, time }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PanelCard orientation="vertical" className={classes.discussionCard}>
      <CommentAuthorBadge time={time} author={author} />
      <Text type="common">{text}</Text>
    </PanelCard>
  );
}

DiscussionCard.propTypes = {};

export default DiscussionCard;
