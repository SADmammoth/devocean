import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import styles from "./ContainerLayout.styles";

const useStyles = createUseStyles(styles);

function ContainerLayout({ children, className }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(classes.containerLayout, className)}>
      {children}
    </div>
  );
}

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ContainerLayout;
