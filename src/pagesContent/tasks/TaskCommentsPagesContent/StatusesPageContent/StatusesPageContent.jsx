import React, { useCallback } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import LoadableItemsList from '../../../../components/generic/LoadableItemsList';
import Text from '../../../../components/generic/Text';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import ChangesCard from '../../../../components/specific/ChangesCard';
import statusChangesState from '../../../../recoil/states/statusChangesState';
import { tasksState_getById } from '../../../../recoil/states/tasksState';

import styles from './StatusesPageContent.styles';

const useStyles = createUseStyles(styles);

function StatusesPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const statusChanges = useRecoilValueLoadable(statusChangesState(id));
  const task = useRecoilValue(tasksState_getById(id));

  const ItemsContainer = ({ children }) => (
    <ScrollLayout
      orientation="vertical"
      scrollOrientation="vertical"
      blockSnapType="start"
      scrollPaddingStart="5px"
      gap="10px">
      {children}
    </ScrollLayout>
  );

  return (
    <StackLayout orientation="vertical" nowrap gap="10px">
      <h1>
        <Text as="span" className={classes.title} type="h1">
          {'Status changes for task'}
        </Text>{' '}
        {!task || (
          <Text as="span" type="big" lines={1} title={task.title}>
            {task.title}
          </Text>
        )}
      </h1>
      <LoadableItemsList
        className={classes.content}
        placeholderClassName={classNames(classes.content, classes.placeholder)}
        as={ItemsContainer}
        items={statusChanges}
        renderItem={(statusChange) => {
          return (
            <ChangesCard
              key={statuses.id}
              className={classes.statuses}
              fields={[
                statusChange.fromStatus?.name,
                statusChange.toStatus?.name,
              ]}
              time={statusChange.time}
              author={statusChange.author}
              text={statusChange.text}
              singleField
            />
          );
        }}
      />
    </StackLayout>
  );
}

StatusesPageContent.propTypes = {};

export default StatusesPageContent;
