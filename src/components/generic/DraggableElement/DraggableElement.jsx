import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import { DraggableElement as DndDraggableElement } from '@sadmammoth/react-dnd';

import styles from './DraggableElement.styles';

const useStyles = createUseStyles(styles);

const DraggableElement = ({
  className,
  id,
  height,
  draggableType,
  content,
  avatar,
  data,
  onDragStart,
  onDragEnd,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <DndDraggableElement
      className={className}
      id={id}
      key={id}
      data={{ 'data-type': draggableType, id, ...data }}
      avatar={avatar}
      rootElement={document}
      height={height}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}>
      {content}
    </DndDraggableElement>
  );
};

DraggableElement.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  draggableType: PropTypes.string,
  content: PropTypes.node.isRequired,
  avatar: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
};

export default DraggableElement;
