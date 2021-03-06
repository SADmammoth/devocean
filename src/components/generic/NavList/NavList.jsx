import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import NavItems from '../NavItems';
import StackLayout from '../layouts/StackLayout';

import styles from './NavList.styles';

const useStyles = createUseStyles(styles);

function NavList({ items }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <nav className={classes.container}>
      <NavItems
        as={({ children }) => (
          <StackLayout
            as="ul"
            orientation="vertical"
            alignX="start"
            gap="0.7rem"
            className={classes.list}>
            {children}
          </StackLayout>
        )}
        items={items}
        itemClass={classes.item}
        itemContainerClass={classes.itemContainer}
      />
    </nav>
  );
}

NavList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
};

export default NavList;
