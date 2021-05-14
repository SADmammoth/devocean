import React from 'react';

import PropTypes from 'prop-types';

import useLocale from '../../../helpers/hooks/useLocale';
import useProgress from '../../../helpers/hooks/useProgress';
import ProgressBar from '../../generic/ProgressBar';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';

function TaskProgress({ classes, reportedTime, estimate }) {
  const progress = useProgress(reportedTime, estimate);
  const locale = useLocale();

  return (
    <>
      <StackLayout
        className={classes.fraction}
        aria-label={locale('progressFractionLabel', {
          reportedTime: reportedTime.toString(),
          estimate: estimate.toString(),
        })}
        orientation="vertical"
        gap="0">
        <Text type="hint" className={classes.reported}>
          {reportedTime.toString()}
        </Text>
        <hr className={classes.divider} />
        <Text type="hint" className={classes.estimate}>
          {estimate.toString()}
        </Text>
      </StackLayout>
      <ProgressBar className={classes.progressbar} progress={progress} />
    </>
  );
}

TaskProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  reportedTime: PropTypes.shape({
    toString: PropTypes.func,
  }),
  estimate: PropTypes.shape({
    toString: PropTypes.func,
  }),
};

export default TaskProgress;
