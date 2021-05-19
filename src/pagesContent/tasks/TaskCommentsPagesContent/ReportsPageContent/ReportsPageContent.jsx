import React, { useCallback } from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Text from '../../../../components/generic/Text';
import NestedContainerLayout from '../../../../components/generic/layouts/NestedContainerLayout';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
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
    if (reports.state === 'hasValue') {
      return reports.contents
        .filter((report, index, array) => {
          if (index > 0) {
            return (
              report.reportedTime ||
              report.estimate !== array[index - 1].estimate
            );
          }

          return true;
        })
        .map((reportsItem) => {
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
    }
  }, [reports.contents]);

  return (
    <StackLayout
      orientation="vertical"
      className={classes.content}
      nowrap
      gap="28px">
      <ScrollLayout
        className={classes.reports}
        orientation="vertical"
        scrollOrientation="vertical"
        blockSnapType="start"
        scrollPaddingStart="5px"
        gap="10px">
        {renderReports()}
      </ScrollLayout>
      {!task?.reportedTime || !reports.contents.length || (
        <NestedContainerLayout margin="20px">
          <TimeReportsBadge
            estimate={new Duration(new String(task?.estimate))}
            reportedTime={new Duration(new String(task?.reportedTime))}
          />
        </NestedContainerLayout>
      )}
    </StackLayout>
  );
}

ReportsPageContent.propTypes = {};

export default ReportsPageContent;
