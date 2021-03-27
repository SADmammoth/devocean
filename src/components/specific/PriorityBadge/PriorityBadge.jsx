import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import priorities from "./priorities";
import styles from "./PriorityBadge.styles";
import icons from "./icons";
import StackLayout from "../../generic/layouts/StackLayout";

const useStyles = createUseStyles(styles);

const PriorityBadge = ({ className, priority }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(icons[priority]);
  return (
    <div
      className={classNames(className)}
      aria-label={`${priorities[priority]} priority`}
    >
      <StackLayout
        alignY="center"
        gap="5px"
        className={classes[priorities[priority]]}
      >
        {icons[priority]}
        <span>{priorities[priority]} priority</span>
      </StackLayout>
    </div>
  );
};

export default PriorityBadge;
