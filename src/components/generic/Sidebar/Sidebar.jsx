import React from "react";
import NestedContainerLayout from "../layouts/NestedContainerLayout";
import PropTypes from "prop-types";
import classNames from "classnames";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Sidebar.styles";
import Text from "../Text";
import StretchLastLayout from "../layouts/StretchLastLayout";

const useStyles = createUseStyles(styles);

function Sidebar({ children, className, style, title }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (!title) {
    return (
      <aside className={classNames(classes.sidebar, className)} style={style}>
        <NestedContainerLayout margin="30px">
          <StackLayout orientation="vertical" alignX="center">
            {children}
          </StackLayout>
        </NestedContainerLayout>
      </aside>
    );
  } else {
    return (
      <StretchLastLayout
        orientation="vertical"
        as="aside"
        className={classNames(className, classes.root)}
        style={style}
      >
        <Text type="big" className={classes.title}>
          {title}
        </Text>
        <NestedContainerLayout margin="30px">
          <StackLayout
            className={classNames(classes.sidebar)}
            orientation="vertical"
            alignX="center"
          >
            {children}
          </StackLayout>
        </NestedContainerLayout>
      </StretchLastLayout>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Sidebar;
