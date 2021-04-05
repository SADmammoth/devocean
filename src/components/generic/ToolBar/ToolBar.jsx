import React from "react";
import NavItems from "../NavItems";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ToolBar.styles";
import StackLayout from "../layouts/StackLayout";

const useStyles = createUseStyles(styles);

const ToolBar = ({ className, items, style, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <aside className={classNames(classes.toolbar, className)} style={style}>
      <NavItems
        as={({ children: navItems }) => (
          <StackLayout
            className={classes.list}
            as="ul"
            orientation="vertical"
            alignX="center"
            gap="1rem"
          >
            {navItems}
            {children}
          </StackLayout>
        )}
        items={items || []}
        itemClass={classes.item}
        itemContainerClass={classes.itemContainer}
      />
    </aside>
  );
};

export default ToolBar;
