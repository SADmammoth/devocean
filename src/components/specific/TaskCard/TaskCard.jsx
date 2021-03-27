import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
import styles from "./TaskCard.styles";
import sizes from "./sizes";
import Text from "../../generic/Text";
import TaskInfo from "./TaskInfo";
import useLocale from "../../../helpers/useLocale";
import priorities from "../PriorityBadge/priorities";
import { Composite, CompositeItem } from "reakit";
import useProgress from "../../../helpers/useProgress";
import TaskHeader from "./TaskHeader";
import TaskTag from "./TaskTag";

const useStyles = createUseStyles(styles);

const TaskCard = ({
  className,
  title,
  priority,
  reportedTime,
  estimate,
  status,
  tag,

  size,

  composite,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let statusText = locale(status);
  if (!statusText) {
    statusText = _.capitalize(status);
  }

  const progress = useProgress(reportedTime, estimate);

  const label = locale("Task", {
    title,
    priority: priorities[priority],
    status: statusText,
    reportedTime: reportedTime.toString(),
    estimate: estimate.toString(),
    progress: progress * 100,
  });

  return (
    <CompositeItem
      as={"article"}
      {...composite}
      className={classNames(classes.task, className, classes[sizes[size]])}
      aria-label={label}
    >
      <TaskTag tag={tag} classes={classes} />
      <TaskHeader title={title} classes={classes} />
      <PriorityBadge className={classes.priority} priority={priority} />
      <TaskInfo
        classes={classes}
        estimate={estimate}
        reportedTime={reportedTime}
        progress={progress}
        status={status}
      />
    </CompositeItem>
  );
};

TaskCard.defaultProps = {
  size: "default",
};

TaskCard.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default TaskCard;
