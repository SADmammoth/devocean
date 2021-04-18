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

const EditNotificationPageContent = ({
  isCreatingNew,
  initialValues = {},
  onSubmit,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const localizedForm = useLocalizedForm(
    getCreateNotificationForm(initialValues)
  );

  const [inputs, setInputs] = useState({});

  const onInputsUpdate = (inputs) => {
    setInputs(inputs);
  };

  const title = isCreatingNew
    ? locale("New notification")
    : locale("Edit notification");

  return (
    <>
      <GridLayout className={classes.content}>
        <Sidebar column={3} className={classes.sidebar}>
          {inputs.time}
          {inputs.author}
        </Sidebar>
        <StackLayout
          column={5}
          className={classes.marginTop}
          orientation="vertical"
          alignY="start"
        >
          <Text type="h1">{title}</Text>
          <StretchLayout>
            <Form
              inputs={localizedForm}
              onSubmit={onSubmit}
              onInputsUpdate={onInputsUpdate}
            >
              {inputs.title}
              {inputs.fullText}
            </Form>
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default EditNotificationPageContent;
