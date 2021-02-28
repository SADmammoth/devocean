import React, { useEffect, useState } from "react";
import clockUpdater from "./clockUpdater.js";
import { createUseStyles } from "react-jss";
import styles from "./DateTime.styles";
import dateToString from "../../helpers/dateToString.js";

const useStyles = createUseStyles(styles);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DateTime() {
  const classes = useStyles();

  const [minutesUpdater] = useState(clockUpdater());
  const [date, setDate] = useState({
    minutes: 0,
    hours: 0,
    day: 0,
    month: 0,
  });

  const updateDateTime = (date) => {
    setDate({
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
    });
  };

  useEffect(() => {
    minutesUpdater.start(updateDateTime);
    return () => {
      minutesUpdater.stop();
    };
  }, [minutesUpdater]);

  return (
    <time className={classes.dateTime} dateTime={dateToString(date)}>
      <div className={classes.time}>
        <span>{date.hours.toString().padStart(2, "0")}</span>
        <span className={classes.blinking}>:</span>
        <span>{date.minutes.toString().padStart(2, "0")}</span>
      </div>
      <hr className={classes.divider} />
      <div className={classes.date}>
        <span>{months[date.month]}</span>
        <span>, {date.day}</span>
      </div>
    </time>
  );
}
