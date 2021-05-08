import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import _ from "lodash";
import styles from "./HistoryPageContent.styles";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import historyState from "../../../recoil/states/historyState";
import ChangesCard from "../../../components/specific/ChangesCard";

const useStyles = createUseStyles(styles);

function HistoryPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useRecoilValueLoadable(historyState(id));

  const getChanges = ({ before, after }) => {
    if (!before || !after) {
      return;
    }
    return Object.fromEntries(
      Object.entries(before).map(([key, value]) => {
        return [key, [value, after[key]]];
      })
    );
  };

  const renderHistory = useCallback(() => {
    if (history.state === "hasValue")
      return history.contents.map((historyItem) => {
        const fields = getChanges(historyItem);
        if (_.isEmpty(fields)) return;
        return (
          <ChangesCard
            fields={fields}
            time={historyItem.time}
            author={historyItem.author}
          />
        );
      });
  }, [history.contents]);

  return <div>{renderHistory()}</div>;
}

HistoryPageContent.propTypes = {};

export default HistoryPageContent;
