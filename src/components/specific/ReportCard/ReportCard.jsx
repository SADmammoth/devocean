import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import PanelCard from '../../generic/PanelCard';
import CommentAuthorBadge from '../CommentAuthorBadge';
import TimeReportsBadge from '../TimeReportsBadge';

import styles from './ReportCard.styles';

const useStyles = createUseStyles(styles);

function ReportCard({
  author,
  time,
  estimate,
  totalReportedTime,
  reportedTime,
  activity,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PanelCard>
      <CommentAuthorBadge author={author} time={time} />
      {!reportedTime.value && estimate.value ? (
        <TimeReportsBadge
          estimate={estimate}
          reportedTime={totalReportedTime}
          text={estimate.toString()}
          activity={activity}
          estimateUpdate
        />
      ) : (
        <TimeReportsBadge
          estimate={estimate}
          reportedTime={totalReportedTime}
          text={`+${reportedTime.toString()}`}
          activity={activity}
        />
      )}
    </PanelCard>
  );
}

ReportCard.propTypes = {};

export default ReportCard;
