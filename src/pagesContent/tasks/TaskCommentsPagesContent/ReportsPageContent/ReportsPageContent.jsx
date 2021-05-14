import React, { useCallback } from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Text from '../../../../components/generic/Text';
import ReportCard from '../../../../components/specific/ReportCard';
import TimeReportsBadge from '../../../../components/specific/TimeReportsBadge';
import Duration from '../../../../helpers/types/Duration';
import reportsState from '../../../../recoil/states/reportsState';
import { tasksState_getById } from '../../../../recoil/states/tasksState';

import styles from './ReportsPageContent.styles';

const useStyles = createUseStyles(styles);

function ReportsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const reports = useRecoilValueLoadable(reportsState(id));
  const task = useRecoilValue(tasksState_getById(id));

  const renderReports = useCallback(() => {
    if (reports.state === 'hasValue')
      return reports.contents.map((reportsItem) => {
        return (
          <ReportCard
            estimate={new Duration(reportsItem.estimate + 'h')}
            reportedTime={new Duration(reportsItem.reportedTime + 'h')}
            totalReportedTime={new Duration(reportsItem.totalReported + 'h')}
            time={reportsItem.time}
            author={reportsItem.author}
            activity={reportsItem.activity}
          />
        );
      });
  }, [reports.contents]);

  return (
    <div>
      {renderReports()}
      <div>
        <Text type="big">Current state</Text>
        <TimeReportsBadge
          estimate={new Duration(new String(task?.estimate))}
          reportedTime={new Duration(new String(task?.reportedTime))}
        />
      </div>
    </div>
  );
}

ReportsPageContent.propTypes = {};

export default ReportsPageContent;
