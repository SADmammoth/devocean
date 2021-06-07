import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import LoadableItemsList from '../../../../components/generic/LoadableItemsList';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import DraggableTask from '../../../../components/specific/DraggableTask';
import useLocale from '../../../../helpers/hooks/useLocale';
import { tasksState_getByFolder } from '../../../../recoil/states/tasksState';

import styles from './ListViewContent.styles';

const useStyles = createUseStyles(styles);

function ListViewTasks({ folderId, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const tasks = useRecoilValueLoadable(tasksState_getByFolder(folderId));

  const ItemsContainer = ({ children, ...props }) => {
    return (
      <StackLayout orientation="vertical" alignY="start">
        <ScrollLayout
          className={classes.list}
          orientation="horizontal"
          gap="10px"
          alignY="start"
          alignX="start"
          aria-label={locale('TaskList')}
          scrollPaddingEnd="0px">
          <DraggableList id="list" list={children || []} draggableType="task" />
        </ScrollLayout>
      </StackLayout>
    );
  };

  return (
    <LoadableItemsList
      as={ItemsContainer}
      items={tasks}
      renderItem={(task) => {
        if (task) return <DraggableTask key={task.id} {...task} />;
      }}
      emptyMessage="Added tasks are showing up here"
    />
  );
}

ListViewTasks.propTypes = {
  folderId: PropTypes.string,
  style: PropTypes.object,
};

export default ListViewTasks;
