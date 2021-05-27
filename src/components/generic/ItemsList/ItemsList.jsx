import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

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
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || ScrollLayout;

  const renderItems = useCallback(
    (items) => {
      return optionalArrayProcession(items, processors)
        .map(renderItem)
        .filter((item) => !!item)
        .map((item, index) =>
          React.cloneElement(item, { ...item.props, index }),
        );
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