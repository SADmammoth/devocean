import React from 'react';

import PropTypes from 'prop-types';

import useLocale from '../../../helpers/hooks/useLocale';
import Text from '../../generic/Text';
import TaskProgress from './TaskProgress';

function TaskInfo({ classes, status, reportedTime, estimate }) {
  const locale = useLocale();
  let statusText = locale(status?.name);
  if (!statusText) {
    statusText = _.capitalize(status?.name);
  }

  return (
    <aside className={classes.info}>
      <Text
        type="hint"
        className={classes.status}
        aria-label={locale('statusLabel', { status })}>
        {statusText}
      </Text>
      {estimate && reportedTime ? (
        <TaskProgress
          classes={classes}
          estimate={estimate}
          reportedTime={reportedTime}
        />
      ) : null}
    </aside>
  );
}

TaskInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ]).isRequired,
  reportedTime: PropTypes.object,
  estimate: PropTypes.object,
};

export default TaskInfo;
