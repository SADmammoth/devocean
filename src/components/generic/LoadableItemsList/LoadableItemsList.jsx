import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StateMonade from '../../../helpers/components/StateMonade';
import optionalArrayProcession from '../../../helpers/functions/optionalArrayProcession';
import Text from '../Text';
import ScrollLayout from '../layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../layouts/StackLayout';

import styles from './LoadableItemsList.styles';

const useStyles = createUseStyles(styles);

function LoadableItemsList({
  items,
  as,
  renderItem,
  emptyMessage,
  showCount,
  processors,
  placeholderClassName,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || ScrollLayout;

  const [renderedItems, setRenderedItems] = useState([]);

  useEffect(() => {
    if (items.state === 'hasValue' && items.contents)
      setRenderedItems(
        optionalArrayProcession([...items.contents], processors)
          .map((item) => {
            return renderItem(item);
          })
          .filter((item) => !!item)
          .map((item, index) =>
            React.cloneElement(item, { key: item.id, ...item.props, index }),
          ),
      );
  }, [items]);

  return (
    <StateMonade state={items.state}>
      {items.contents.length ? (
        <As {...props}>{renderedItems}</As>
      ) : (
        <StackLayout
          className={placeholderClassName}
          alignX="center"
          alignY="center">
          <Text type="big">{emptyMessage || 'No items here'}</Text>
        </StackLayout>
      )}
    </StateMonade>
  );
}

LoadableItemsList.propTypes = {};

export default LoadableItemsList;
