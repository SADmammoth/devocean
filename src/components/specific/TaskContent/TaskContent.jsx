import React, { useMemo } from "react";

import classNames from "classnames";

import { useTheme, createUseStyles } from "react-jss";
import ProgressBar from "../../generic/ProgressBar/ProgressBar";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
import styles from "./TaskContent.styles";

const useStyles = createUseStyles(styles);

const TaskContent = ({
  className,
  title,
  priority,
  reportedTime,
  estimate,
  status,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const progress = useMemo(() => {
    return reportedTime.getTime() / estimate.getTime();
  }, [reportedTime, estimate]);

  return (
    <article className={classNames(classes.task, className)}>
      <header>
        <p>{title}</p>
      </header>
      <PriorityBadge priority={priority} />
      <aside>
        <span>{status}</span>
        <div>
          <span>{reportedTime.toString()}</span>
          <hr />
          <span>{estimate.toString()}</span>
          <ProgressBar progress={progress} />
        </div>
      </aside>
    </article>
  );
};

export default TaskContent;
