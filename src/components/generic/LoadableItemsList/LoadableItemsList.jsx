import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StateMonade from '../../../helpers/components/StateMonade';
import Text from '../Text';
import ScrollLayout from '../layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../layouts/StackLayout';

import styles from './LoadableItemsList.styles';

const useStyles = createUseStyles(styles);

function LoadableItemsList({ items, as, renderItem, emptyMessage, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || ScrollLayout;

  const [renderedItems, setRenderedItems] = useState([]);

  useEffect(() => {
    setRenderedItems(
      items.state === 'hasValue' &&
        items.contents
          .map((item) => {
            return renderItem(item);
          })
          .filter((item) => !!item),
    );
  }, [items]);

  return (
    <StateMonade state={items.state}>
      {items.contents.length ? (
        <As {...props}>{renderedItems}</As>
      ) : (
        <StackLayout alignX="center" alignY="center">
          <Text type="big">{emptyMessage || 'No items here'}</Text>
        </StackLayout>
      )}
    </StateMonade>
  );
}

LoadableItemsList.propTypes = {};

export default LoadableItemsList;
