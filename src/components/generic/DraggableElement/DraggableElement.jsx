import React, { useState } from 'react';

import classNames from 'classnames';
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
  onReject,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [dragging, setDragging] = useState(false);

  return (
    <DndDraggableElement
      className={classNames(className, { [classes.dragging]: dragging })}
      id={id}
      key={id}
      data={{ 'data-type': draggableType, id, ...data }}
      avatar={avatar}
      rootElement={document}
      height={height}
      onDragStart={(...data) => {
        setDragging(true);
        onDragStart(...data);
      }}
      onReject={(...data) => {
        setDragging(false);
        onReject(...data);
      }}
      onDragEnd={(...data) => {
        setDragging(false);
        onDragEnd(...data);
      }}>
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
  onReject: PropTypes.func,
};

export default DraggableElement;
