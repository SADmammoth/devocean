import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import orientations from "./orientations";
import styles from "./ProgressBar.styles";
import PropTypes from "prop-types";
import useLocale from "../../../helpers/useLocale";

const useStyles = createUseStyles(styles);

const ProgressBar = ({ className, progress, orientation }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <div
      className={classNames(
        className,
        classes.progressbar,
        classes[orientations[orientation]]
      )}
      style={{ "--progress": `${progress * 100}%` }}
      aria-label={locale("progressLabel", { progress: progress * 100 })}
    >
      <div className={classes.value}>{progress}</div>
    </div>
  );
};

ProgressBar.defaultProps = {
  orientation: "vertical",
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(Object.keys(orientations)),
};

export default ProgressBar;
