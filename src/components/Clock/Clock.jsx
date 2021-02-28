import React from "react";

import { useTheme, createUseStyles } from "react-jss";
import DateTime from "../DateTime";
import styles from "./Clock.styles";

const useStyles = createUseStyles(styles);

export default function Clock({ city }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.clock}>
      <p className={classes.cityText}>{city}</p>
      <DateTime />
    </div>
  );
}
