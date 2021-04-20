import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NestedContainerLayout.styles";

const useStyles = createUseStyles(styles);

function NestedContainerLayout({ className, children, as, margin, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as;

  return (
    <As className={classNames(className, classes.outerContainer)} style={style}>
      <div className={classes.spacer} style={{ "--margin": margin }}></div>
      <div className={classes.nestedContainer}>{children}</div>
      <div className={classes.spacer} style={{ "--margin": margin }}></div>
    </As>
  );
}

NestedContainerLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.node,
  margin: PropTypes.string,
  style: PropTypes.object,
};

NestedContainerLayout.defaultProps = {
  margin: "10px",
  as: "div",
};

export default NestedContainerLayout;
