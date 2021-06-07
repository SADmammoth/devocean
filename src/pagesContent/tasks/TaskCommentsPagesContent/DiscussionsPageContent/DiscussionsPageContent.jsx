import React, { useCallback, useEffect } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import LoadableItemsList from '../../../../components/generic/LoadableItemsList';
import PopupButton from '../../../../components/generic/PopupButton';
import Text from '../../../../components/generic/Text';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import DiscussionCard from '../../../../components/specific/DiscussionCard/DiscussionCard';
import FeatureMonade from '../../../../helpers/components/FeatureMonade';
import StateMonade from '../../../../helpers/components/StateMonade';
import useLocale from '../../../../helpers/hooks/useLocale';
import discussionsState from '../../../../recoil/states/discussionsState';
import { tasksState_getById } from '../../../../recoil/states/tasksState';
import CreateCommentForm from './CreateCommentForm';

import styles from './DiscussionsPageContent.styles';

const useStyles = createUseStyles(styles);

function DiscussionsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const discussions = useRecoilValueLoadable(discussionsState(id));
  const task = useRecoilValueLoadable(tasksState_getById(id));

  const ItemsContainer = ({ className, children, ...props }) => (
    <ScrollLayout
      className={className}
      orientation="vertical"
      scrollOrientation="vertical"
      nowrap
      gap="15px">
      {children}
    </ScrollLayout>
  );

  return (
    <StackLayout orientation="vertical" className={classes.discussions} nowrap>
      <h1>
        <Text as="span" className={classes.title} type="h1">
          {locale('Comments for task')}
        </Text>
        {!task.contents || (
          <Text as="span" type="big" lines={1} title={task.contents.title}>
            {task.contents.title}
          </Text>
        )}
      </h1>
      <LoadableItemsList
        className={classes.messageBoard}
        placeholderClassName={classNames(
          classes.messageBoard,
          classes.placeholder,
        )}
        as={ItemsContainer}
        items={discussions}
        renderItem={(discussion) => {
          return <DiscussionCard key={discussion.id} {...discussion} />;
        }}
        processors={[{ reverse: [] }]}
      />
      <FeatureMonade feature="workWithTasks">
        <CreateCommentForm alignY="end" classes={classes} id={id} />
      </FeatureMonade>
    </StackLayout>
  );
}

DiscussionsPageContent.propTypes = {};

export default DiscussionsPageContent;
