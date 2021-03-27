import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./EditNotificationPageContent.styles";
import Sidebar from "../../components/generic/Sidebar";
import StackLayout from "../../components/generic/layouts/StackLayout";
import GridLayout from "../../components/generic/layouts/GridLayout";
import Form from "../../components/generic/Form";
import getCreateNotificationForm from "../../helpers/forms/getCreateNotificationForm";
import StretchLayout from "../../components/generic/layouts/StretchLayout";
import useLocalizedForm from "../../helpers/forms/useLocalizedForm";
import useLocale from "../../helpers/useLocale";
import Text from "../../components/generic/Text";

const useStyles = createUseStyles(styles);

const EditNotificationPageContent = ({ initialValues }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let shortText, fullText, dateTime, addressee;

  if (initialValues) {
    ({ shortText, fullText, dateTime, addressee } = initialValues);
  }

  const localizedForm = useLocalizedForm(
    getCreateNotificationForm({
      shortText,
      fullText,
      dateTime,
      addressee,
    })
  );

  const [inputs, setInputs] = useState({});

  const onInputsUpdate = (inputs) => {
    console.log(inputs);
    setInputs(inputs);
  };

  return (
    <>
      <GridLayout className={classes.content}>
        <Sidebar column={3} className={classes.sidebar}>
          {inputs.dateTime}
          {inputs.addressee}
        </Sidebar>
        <StackLayout
          column={5}
          className={classes.marginTop}
          orientation="vertical"
          alignY="start"
        >
          <Text type="h1">{locale("New notification")}</Text>
          <StretchLayout>
            <Form
              inputs={localizedForm}
              onSubmit={(data) => {
                console.log(data);
              }}
              onInputsUpdate={onInputsUpdate}
            >
              {inputs.$list}
            </Form>
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default EditNotificationPageContent;
