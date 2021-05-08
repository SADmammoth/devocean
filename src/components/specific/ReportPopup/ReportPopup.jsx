import React from "react";
import _ from "lodash";
import Button from "../../generic/Button";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ReportPopup.styles";
import showPopup from "../../../helpers/showPopup";
import { useSetRecoilState } from "recoil";
import reportsState from "../../../recoil/states/reportsState";
import Duration from "../../../helpers/Duration";

const useStyles = createUseStyles(styles);

function ReportPopup({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addReport = useSetRecoilState(reportsState(id));

  const popup = () =>
    showPopup({
      inputs: [
        {
          type: "text",
          name: "reportedTime",
          label: "Reported time",
          validator: (input) => {
            return !_.isNaN(new Duration(input).value);
          },
        },
        {
          type: "select",
          name: "activity",
          label: "Activity",
          valueOptions: [
            {
              label: "Development",
            },
            {
              label: "Testing",
            },
          ],
        },
      ],
      children: [],
      closeButtonText: "Report",
    });

  return (
    <Button
      onClick={() => {
        popup().then(({ reportedTime, activity }) => {
          addReport({
            reportedTime: new Duration(reportedTime).getHours(),
            activity,
            author: "6091a1bf01f2dd1db479f717",
            time: new Date(),
            task: id,
          });
        });
      }}
    >
      Report
    </Button>
  );
}

ReportPopup.propTypes = {};

export default ReportPopup;
