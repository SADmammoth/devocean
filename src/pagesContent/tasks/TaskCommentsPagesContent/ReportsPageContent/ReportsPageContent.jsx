import React, { useCallback } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Card from '../../../../components/generic/Card';
import LoadableItemsList from '../../../../components/generic/LoadableItemsList';
import Text from '../../../../components/generic/Text';
import NestedContainerLayout from '../../../../components/generic/layouts/NestedContainerLayout';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import ReportCard from '../../../../components/specific/ReportCard';
import TimeReportsBadge from '../../../../components/specific/TimeReportsBadge';
import StateMonade from '../../../../helpers/components/StateMonade';
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

  const ItemsContainer = ({ children }) => (
    <ScrollLayout
      orientation="vertical"
      scrollOrientation="vertical"
      blockSnapType="start"
      scrollPaddingStart="5px"
      gap="10px">
      {children}
    </ScrollLayout>
  );

  return (
    <StackLayout
      orientation="vertical"
      className={classes.content}
      nowrap
      gap="28px">
      <StackLayout orientation="vertical" gap="10px">
        <h1>
          <Text className={classes.title} type="h1" as="span">
            {'Time reports for task'}
          </Text>
          {!task || (
            <Text type="big" as="span" lines={1} title={task.title}>
              {task.title}
            </Text>
          )}
        </h1>
        <LoadableItemsList
          className={classes.reports}
          placeholderClassName={classNames(
            classes.reports,
            classes.placeholder,
          )}
          as={ItemsContainer}
          items={reports}
          renderItem={(reportsItem) => {
            return (
              <ReportCard
                key={reportsItem.id}
                estimate={new Duration(reportsItem.estimate + 'h')}
                reportedTime={new Duration(reportsItem.reportedTime + 'h')}
                totalReportedTime={
                  new Duration(reportsItem.totalReported + 'h')
                }
                time={reportsItem.time}
                author={reportsItem.author}
                activity={reportsItem.activity}
              />
            );
          }}
          processors={[
            {
              filter: [
                (report, index, array) => {
                  if (index > 0) {
                    return (
                      report.reportedTime ||
                      report.estimate !== array[index - 1].estimate
                    );
                  }

                  return true;
                },
              ],
            },
          ]}
        />
      </StackLayout>
      {!task?.reportedTime || !reports.contents.length || (
        <NestedContainerLayout margin="20px">
          <StackLayout orientation="vertical" gap="10px">
            <Text type="common" bold>
              Current state
            </Text>
            <TimeReportsBadge
              estimate={new Duration(new String(task?.estimate))}
              reportedTime={new Duration(new String(task?.reportedTime))}
            />
          </StackLayout>
        </NestedContainerLayout>
      )}
    </StackLayout>
  );
}

ReportsPageContent.propTypes = {};

export default ReportsPageContent;
