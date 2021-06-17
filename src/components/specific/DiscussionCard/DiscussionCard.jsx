import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { userDataState } from '../../../recoil/states/userState';
import Card from '../../generic/Card';
import PanelCard from '../../generic/PanelCard';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';

import styles from './DiscussionCard.styles';

const useStyles = createUseStyles(styles);

function DiscussionCard({ id, author, text, time, index }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const currentUser = useRecoilValueLoadable(userDataState);

  return (
    <Card
      index={index}
      orientation="vertical"
      className={classes.discussionCard}>
      <StackLayout orientation="vertical" gap="10px">
        <CommentAuthorBadge
          time={time}
          author={author || currentUser?.contents}
        />
        <Text type="common" className={classes.message}>
          {text}
        </Text>
      </StackLayout>
    </Card>
  );
}

DiscussionCard.propTypes = {};

export default DiscussionCard;
