import React from "react";
import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout";
import { useTheme, createUseStyles } from "react-jss";
import useProgress from "../../../helpers/useProgress";
import CircleProgressBar from "../../generic/CircleProgressBar/CircleProgressBar";
import styles from "./TimeReportsBadge.styles";
import Text from "../../generic/Text";
import useLocale from "../../../helpers/useLocale";

const useStyles = createUseStyles(styles);

const TimeReportsBadge = ({ estimate, reportedTime }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();
  const progress = useProgress(reportedTime, estimate);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block>
        <CircleProgressBar
          progress={progress}
          width="5px"
          backdrop={theme.background.light}
          background={theme.background.dark}
        >
          <Text type="common" bold>
            {reportedTime.toString()}
          </Text>
        </CircleProgressBar>
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="common" bold>
          {locale("Reported")}
        </Text>
        <Text type="small">
          {locale("from estimate", { estimate: estimate.toString() })}
        </Text>
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
};

export default TimeReportsBadge;