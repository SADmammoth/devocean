import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import InteractiveCard from '../../generic/InteractiveCard';
import Text from '../../generic/Text';
import PriorityBadge from '../PriorityBadge';
import priorities from '../PriorityBadge/priorities';
import TaskHeader from './TaskHeader';
import TaskInfo from './TaskInfo';
import TaskTag from './TaskTag';
import sizes from './sizes';

import styles from './TaskCard.styles';

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
  index,

  isEvent,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let statusText = locale(status?.name);
  if (!statusText) {
    statusText = _.capitalize(status?.name);
  }

  const label =
    estimate && reportedTime
      ? locale('Task estimated', {
          title,
          priority: priorities[priority],
          status: statusText,
          reportedTime: reportedTime?.toString(),
          estimate: estimate?.toString(),
          progress: (reportedTime.getHours() / estimate.getHours()) * 100,
        })
      : locale('Task', {
          title,
          priority: priorities[priority],
          status: statusText,
        });

  return (
    <InteractiveCard
      className={classNames(classes.task, className, classes[sizes[size]])}
      aria-label={label}
      link={`/tasks/${id}`}
      index={index}>
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
  size: 'default',
};

export default TaskCard;
