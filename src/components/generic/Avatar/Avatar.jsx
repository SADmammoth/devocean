import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Avatar.styles";

const useStyles = createUseStyles(styles);

const Avatar = ({ size, image, displayName, labelledby }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const displayImage = image || require("@/assets/images/avatar.jpg");

  return (
    <img
      className={classes.avatar}
      src={displayImage}
      alt="avatar"
      aria-labelledby={labelledby}
      style={{ width: size, height: size }}
    />
  );
};

export default Avatar;