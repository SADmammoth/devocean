import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import priorities from "./priorities";
import styles from "./PriorityBadge.styles";
import icons from "./icons";
import StackLayout from "../../generic/layouts/StackLayout";
import useLocale from "../../../helpers/useLocale";

const useStyles = createUseStyles(styles);

function PriorityBadge({ className, priority }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const priorityText = locale(priorities[priority] + "Priority");
  const priorityLabel = locale("priorityLabel", { priority: priorityText });

  return (
    <div className={classNames(className)} aria-label={priorityLabel}>
      <StackLayout
        alignY="center"
        gap="5px"
        className={classes[priorities[priority]]}
      >
        {icons[priority]}
        <span>{priorityLabel}</span>
      </StackLayout>
    </div>
  );
}

PriorityBadge.propTypes = {
  className: PropTypes.string,
  priority: PropTypes.oneOf(Object.keys(priorities)).isRequired,
};

export default PriorityBadge;
