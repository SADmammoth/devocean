import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StatusesPageContent.styles";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import statusChangesState from "../../../recoil/states/statusChangesState";
import ChangesCard from "../../../components/specific/ChangesCard";

const useStyles = createUseStyles(styles);

function StatusesPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const statusChanges = useRecoilValueLoadable(statusChangesState(id));

  const renderStatusChanges = useCallback(() => {
    if (statusChanges.state === "hasValue")
      return statusChanges.contents.map((statusChange) => {
        return (
          <ChangesCard
            fields={[
              statusChange.fromStatus?.name,
              statusChange.toStatus?.name,
            ]}
            time={statusChange.time}
            author={statusChange.author}
            text={statusChange.text}
            singleField
          />
        );
      });
  }, [statusChanges.contents]);

  return <div>{renderStatusChanges()}</div>;
}

StatusesPageContent.propTypes = {};

export default StatusesPageContent;
