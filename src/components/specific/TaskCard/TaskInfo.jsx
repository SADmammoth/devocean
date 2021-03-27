import React from "react";
import ProgressBar from "../../generic/ProgressBar/ProgressBar";
import Text from "../../generic/Text";
import StackLayout from "../../generic/layouts/StackLayout";
import useLocale from "../../../helpers/useLocale";

export default function TaskInfo({
  classes,
  status,
  reportedTime,
  estimate,
  progress,
}) {
  const locale = useLocale();
  let statusText = locale(status);
  if (!statusText) {
    statusText = _.capitalize(status);
  }

  return (
    <aside className={classes.info}>
      <Text
        type="hint"
        className={classes.status}
        aria-label={locale("statusLabel", { status })}
      >
        {statusText}
      </Text>
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
          {reportedTime.toString() + "h"}
        </Text>
        <hr className={classes.divider} />
        <Text type="hint" className={classes.estimate}>
          {estimate.toString() + "h"}
        </Text>
      </StackLayout>
      <ProgressBar className={classes.progressbar} progress={progress} />
    </aside>
  );
}
