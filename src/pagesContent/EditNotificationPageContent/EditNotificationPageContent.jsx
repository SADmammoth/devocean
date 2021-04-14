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
import { useSetRecoilState } from "recoil";
import notificationsState from "../../recoil/states/notificationsState";

const useStyles = createUseStyles(styles);

const EditNotificationPageContent = ({ initialValues }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let title, description, time, author;

  if (initialValues) {
    ({ title, description, time, author } = initialValues);
  }

  const addNotification = useSetRecoilState(notificationsState);

  const localizedForm = useLocalizedForm(
    getCreateNotificationForm({
      title,
      description,
      time,
      author,
    })
  );

  const [inputs, setInputs] = useState({});

  const onInputsUpdate = (inputs) => {
    setInputs(inputs);
  };

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
          <Text type="h1">{locale("New notification")}</Text>
          <StretchLayout>
            <Form
              inputs={localizedForm}
              onSubmit={async (data) => {
                return addNotification(data);
              }}
              onInputsUpdate={onInputsUpdate}
            >
              {inputs.title}
              {inputs.description}
            </Form>
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default EditNotificationPageContent;
