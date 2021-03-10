import React from "react";
import classNames from "classnames";
import useLocale from "../../helpers/useLocale";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./EditNotificationPageContent.styles";
import Sidebar from "../../components/generic/Sidebar";
import StackLayout from "../../components/generic/layouts/StackLayout";
import GridLayout from "../../components/generic/layouts/GridLayout";
import Form from "../../components/generic/Form";
import getCreateNotificationForm from "../../helpers/forms/getCreateNotificationForm";
import StretchLayout from "../../components/generic/layouts/StretchLayout";

const useStyles = createUseStyles(styles);

const EditNotificationPageContent = ({ initialValues }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let shortText, fullText, dateTime;

  if (initialValues) {
    ({ shortText, fullText, dateTime } = initialValues);
  }

  return (
    <div>
      <GridLayout>
        <Sidebar column={3}></Sidebar>
        <StackLayout column={5}>
          <StretchLayout>
            <Form
              inputs={getCreateNotificationForm({
                shortText,
                fullText,
                dateTime,
              })}
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </div>
  );
};

export default EditNotificationPageContent;
