import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NestedContainerLayout.styles";

const useStyles = createUseStyles(styles);

function NestedContainerLayout({ className, children, margin, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.spacer} style={{ "--margin": margin }}></div>
      <div className={classNames(className, classes.nestedContainer)}>
        {children}
      </div>
      <div className={classes.spacer} style={{ "--margin": margin }}></div>
    </div>
  );
}

NestedContainerLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  style: PropTypes.object,
};

NestedContainerLayout.defaultProps = {
  margin: "10px",
};

export default NestedContainerLayout;
