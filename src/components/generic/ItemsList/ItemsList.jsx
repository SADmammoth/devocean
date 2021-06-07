import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import { DropArea } from '@sadmammoth/react-dnd';

import optionalArrayProcession from '../../../helpers/functions/optionalArrayProcession';
import Text from '../Text';
import ScrollLayout from '../layouts/ScrollLayout';
import StackLayout from '../layouts/StackLayout';

import styles from './ItemsList.styles';

const useStyles = createUseStyles(styles);

function ItemsList({
  className,
  placeholderClassName,
  items,
  as,
  renderItem,
  emptyMessage,
  processors,
  dropareaOnEmpty,
  onDrop,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || ScrollLayout;
  const list = optionalArrayProcession(items, processors).filter(
    (item) => !!item,
  );

  const renderItems = useCallback(
    (items) => {
      return list
        .map(renderItem)
        .map((item, index) =>
          React.cloneElement(item, { ...item.props, index }),
        );
    },
    [renderItem],
  );

  if (list.length) {
    return (
      <As className={className} {...props}>
        {renderItems(items)}
      </As>
    );
  }
  if (dropareaOnEmpty) {
    return (
      <StackLayout
        className={placeholderClassName}
        alignX="center"
        alignY="center">
        <DropArea index={{ y: 0, x: 0 }} setData={onDrop}>
          <Text type="big">{emptyMessage || 'No items here'}</Text>
        </DropArea>
      </StackLayout>
    );
  }
  return (
    <StackLayout
      className={placeholderClassName}
      alignX="center"
      alignY="center">
      <Text type="big">{emptyMessage || 'No items here'}</Text>
    </StackLayout>
  );
}

ItemsList.propTypes = {};

export default ItemsList;
