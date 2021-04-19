import React from "react";
import PropTypes from "prop-types";
import Text from "../../generic/Text";
import { useTheme, createUseStyles } from "react-jss";
import useLocale from "../../../helpers/useLocale";
import StackLayout from "../../generic/layouts/StackLayout";
import styles from "./StatusBadge.styles";

const useStyles = createUseStyles(styles);

function StatusBadge({ status, timeInStatus }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <StackLayout orientation="vertical" alignX="start" gap="0">
      <Text type="common">
        {locale("Status", { status: locale(status).toUpperCase() })}
      </Text>
      <Text type="small">{locale("TimeInStatus", { time: timeInStatus })}</Text>
    </StackLayout>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  timeInStatus: PropTypes.string,
};

export default StatusBadge;
