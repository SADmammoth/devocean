import React from "react";

import TimeReportsBadge from "../TimeReportsBadge";

import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ReportCard.styles";
import PanelCard from "../../generic/PanelCard";
import CommentAuthorBadge from "../CommentAuthorBadge/CommentAuthorBadge";

const useStyles = createUseStyles(styles);

function ReportCard({
  author,
  time,
  estimate,
  totalReportedTime,
  reportedTime,
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
          estimateUpdate
        />
      ) : (
        <TimeReportsBadge
          estimate={estimate}
          reportedTime={totalReportedTime}
          text={`+${reportedTime.toString()}`}
        />
      )}
    </PanelCard>
  );
}

ReportCard.propTypes = {};

export default ReportCard;
