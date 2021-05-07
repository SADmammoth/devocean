import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import _ from "lodash";
import styles from "./ReportsPageContent.styles";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import reportsState from "../../../recoil/states/reportsState";
import ChangesCard from "../../../components/specific/ChangesCard";
import ReportCard from "../../../components/specific/ReportCard";
import Duration from "../../../helpers/Duration";

const useStyles = createUseStyles(styles);

function ReportsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const reports = useRecoilValueLoadable(reportsState(id));

  const renderReports = useCallback(() => {
    if (reports.state === "hasValue")
      return reports.contents.map((reportsItem) => {
        return (
          <ReportCard
            estimate={new Duration(reportsItem.estimate + "h")}
            reportedTime={new Duration(reportsItem.reportedTime + "h")}
            totalReportedTime={new Duration(reportsItem.totalReported + "h")}
            time={reportsItem.time}
            author={reportsItem.author}
          />
        );
      });
  }, [reports.contents]);

  return <div>{renderReports()}</div>;
}

ReportsPageContent.propTypes = {};

export default ReportsPageContent;
