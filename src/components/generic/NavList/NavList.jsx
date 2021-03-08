import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NavList.styles";
import classNames from "classnames";
import NavItems from "../NavItems";
import StackLayout from "../layouts/StackLayout";

const useStyles = createUseStyles(styles);

const NavList = ({ items }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <nav className={classes.container}>
      <StackLayout
        as="ul"
        orientation="vertical"
        alignX="left"
        gap="0.7rem"
        className={classes.list}
      >
        <NavItems
          items={items}
          itemClass={classes.item}
          itemContainerClass={classes.itemContainer}
        />
      </StackLayout>
    </nav>
  );
};

NavList.propTypes = {};

export default NavList;
