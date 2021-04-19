import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import PriorityBadge from "../PriorityBadge";
import styles from "./TaskCard.styles";
import sizes from "./sizes";
import TaskInfo from "./TaskInfo";
import useLocale from "../../../helpers/useLocale";
import priorities from "../PriorityBadge/priorities";
import TaskHeader from "./TaskHeader";
import TaskTag from "./TaskTag";
import InteractiveCard from "../../generic/InteractiveCard";

const useStyles = createUseStyles(styles);

const TaskCard = ({
  id,
  className,
  title,
  priority,
  reportedTime,
  estimate,
  status,
  tag,
  size,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let statusText = locale(status);
  if (!statusText) {
    statusText = _.capitalize(status);
  }

  const label =
    estimate && reportedTime
      ? locale("Task estimated", {
          title,
          priority: priorities[priority],
          status: statusText,
          reportedTime: reportedTime?.toString(),
          estimate: estimate?.toString(),
          progress: (reportedTime.getHours() / estimate.getHours()) * 100,
        })
      : locale("Task", {
          title,
          priority: priorities[priority],
          status: statusText,
        });

  return (
    <InteractiveCard
      className={classNames(classes.task, className, classes[sizes[size]])}
      aria-label={label}
      link={`/tasks/${id}`}
    >
      {tag ? (
        <TaskTag color={tag.color} name={tag.name} classes={classes} />
      ) : null}
      <TaskHeader title={title} classes={classes} />
      <PriorityBadge className={classes.priority} priority={priority} />
      <TaskInfo
        classes={classes}
        estimate={estimate}
        reportedTime={reportedTime}
        status={status}
      />
    </InteractiveCard>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  reportedTime: PropTypes.object,
  estimate: PropTypes.object,
  status: PropTypes.string,
  tag: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  size: PropTypes.oneOf(Object.keys(sizes)),
};

TaskCard.defaultProps = {
  size: "default",
};

export default TaskCard;
