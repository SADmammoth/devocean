import React from "react";
import ProgressBar from "../../generic/ProgressBar/ProgressBar";
import Text from "../../generic/Text";
import StackLayout from "../../generic/layouts/StackLayout";
import useLocale from "../../../helpers/useLocale";
import TaskProgress from "./TaskProgress";

export default function TaskInfo({ classes, status, reportedTime, estimate }) {
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
