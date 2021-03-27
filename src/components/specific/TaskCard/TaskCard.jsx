import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import ProgressBar from "../../generic/ProgressBar/ProgressBar";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
import styles from "./TaskCard.styles";
import sizes from "./sizes";
import Text from "../../generic/Text";
import StackLayout from "../../generic/layouts/StackLayout";

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
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const progress = useMemo(() => {
    return reportedTime.getTime() / estimate.getTime();
  }, [reportedTime, estimate]);

  let tagColor, tagName;
  if (tag) ({ color: tagColor, name: tagName } = tag);

  return (
    <article
      className={classNames(classes.task, className, classes[sizes[size]])}
    >
      <aside
        className={classes.colorTag}
        style={{ background: tagColor }}
        aria-label={tagName}
      >
        {tagName}
      </aside>
      <header className={classes.header}>
        <Text type="small" bold className={classes.title} lines={2}>
          {title}
        </Text>
      </header>
      <PriorityBadge className={classes.priority} priority={priority} />
      <aside className={classes.info}>
        <Text type="hint" className={classes.status}>
          {status}
        </Text>
        <StackLayout
          orientation="vertical"
          gap="0"
          className={classes.fraction}
        >
          <Text type="hint" className={classes.reported}>
            {reportedTime.toString() + "h"}
          </Text>
          <hr className={classes.divider} />
          <Text type="hint" className={classes.estimate}>
            {estimate.toString() + "h"}
          </Text>
        </StackLayout>
        <ProgressBar className={classes.progressbar} progress={progress} />
      </aside>
    </article>
  );
};

TaskCard.defaultProps = {
  size: "default",
};

TaskCard.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default TaskCard;
