import React, { useEffect } from "react";

import localeState from "../../../recoil/states/localeState";

import RelativeDate from "../../../helpers/RelativeDate";

import Text from "../Text";

import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./LiveRelativeDate.styles";
import componentUpdater from "../../../helpers/componentUpdater";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const useStyles = createUseStyles(styles);

function LiveRelativeDate({ date, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [relativeDate, update] = useState(new RelativeDate(date).toString());
  const { start, stop } = componentUpdater(0);

  const locale = useRecoilValue(localeState);

  useEffect(() => {
    start(() => {
      update(new RelativeDate(date).toString());
    });

    return () => stop();
  }, []);

  return (
    <Text
      {...props}
      as="time"
      title={new Date(date).toLocaleString(locale, {
        weekday: "short",
        day: "numeric",
        year: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      })}
      dateTime={date.toString()}
    >
      {relativeDate}
    </Text>
  );
}

LiveRelativeDate.propTypes = {};

export default LiveRelativeDate;
