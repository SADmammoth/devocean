import React from "react";
import useLocale from "../../../helpers/useLocale";
import useProgress from "../../../helpers/useProgress";
import StackLayout from "../../generic/layouts/StackLayout";
import ProgressBar from "../../generic/ProgressBar";
import Text from "../../generic/Text";

export default function TaskProgress({ classes, reportedTime, estimate }) {
  const progress = useProgress(reportedTime, estimate);
  const locale = useLocale();

  return (
    <>
      <StackLayout
        className={classes.fraction}
        aria-label={locale("progressFractionLabel", {
          reportedTime: reportedTime.toString(),
          estimate: estimate.toString(),
        })}
        orientation="vertical"
        gap="0"
      >
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
