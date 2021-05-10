import React, { useCallback, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import PopupButton from '../../../components/generic/PopupButton';
import Text from '../../../components/generic/Text';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import DiscussionCard from '../../../components/specific/DiscussionCard/DiscussionCard';
import FeatureMonade from '../../../helpers/FeatureMonade';
import StateMonade from '../../../helpers/StateMonade';
import useLocale from '../../../helpers/useLocale';
import discussionsState from '../../../recoil/states/discussionsState';
import { tasksState_getById } from '../../../recoil/states/tasksState';
import CreateCommentForm from './CreateCommentForm';

import styles from './DiscussionsPageContent.styles';

const useStyles = createUseStyles(styles);

function DiscussionsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const discussions = useRecoilValueLoadable(discussionsState(id));
  useEffect(() => {
    console.log(discussions);
  }, [discussions.state]);

  const renderDiscussions = useCallback(() => {
    if (discussions.state === 'hasValue')
      return discussions.contents.map((discussion) => {
        return <DiscussionCard {...discussion} />;
      });
  }, [discussions.contents]);

  const task = useRecoilValueLoadable(tasksState_getById(id));

  return (
    <StackLayout orientation="vertical" className={classes.discussions} nowrap>
      <Text className={classes.title} type="h1">
        {locale('Comments for task')}
        <Text type="big" lines={1} title={task.contents?.title}>
          {task.contents?.title}
        </Text>
      </Text>
      <StackLayout
        orientation="vertical"
        className={classes.messageBoard}
        gap="15px"
        scroll>
        <StateMonade state={discussions.state}>
          {renderDiscussions()}
        </StateMonade>
      </StackLayout>
      <FeatureMonade feature="workWithTasks">
        <CreateCommentForm alignY="end" classes={classes} id={id} />
      </FeatureMonade>
    </StackLayout>
  );
}

DiscussionsPageContent.propTypes = {};

export default DiscussionsPageContent;
