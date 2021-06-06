import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';

import { DraggableList as DndDraggableList } from '@sadmammoth/react-dnd';

import userState from '../../../recoil/states/userState';

import styles from './DraggableList.styles';

const useStyles = createUseStyles(styles);

function DraggableList({
  id,
  list,
  onOrderChange,
  onNewItem,
  draggableType,
  draggableAreaSize,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const userId = useRecoilValue(userState);

  return (
    <DndDraggableList
      className={classes.list}
      id={id}
      list={list}
      onOrderChange={onOrderChange}
      indexKey="id"
      accept={{ 'data-type': draggableType, userId }}
      dropAreaSize={draggableAreaSize}
      gap="10px"
      onNewItem={onNewItem}
    />
  );
}

DraggableList.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.node).isRequired,
  onOrderChange: PropTypes.func,
  draggableType: PropTypes.string,
  draggableAreaSize: PropTypes.string,
};

DraggableList.defaultProps = {
  draggableAreaSize: '50px',
};

export default DraggableList;
