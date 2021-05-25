import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import ScrollLayout from '../layouts/ScrollLayout/ScrollLayout';
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
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || ScrollLayout;

  const renderItems = useCallback(
    (items) => {
      return items.map(renderItem);
    },
    [renderItem],
  );

  return items.length ? (
    <As className={className} {...props}>
      {renderItems(items)}
    </As>
  ) : (
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
