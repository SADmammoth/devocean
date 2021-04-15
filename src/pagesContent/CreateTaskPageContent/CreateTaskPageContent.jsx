import React, { useState } from "react";
import Text from "../../components/generic/Text";
import Sidebar from "../../components/generic/Sidebar";
import useLocale from "../../helpers/useLocale";
import Form from "../../components/generic/Form";
import useLocalizedForm from "../../helpers/forms/useLocalizedForm";
import StackLayout from "../../components/generic/layouts/StackLayout";
import GridLayout from "../../components/generic/layouts/GridLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./CreateTaskPageContent.styles";
import getCreateTaskForm from "../../helpers/forms/getCreateTaskForm";
import { useSetRecoilState } from "recoil";
import tasksState from "../../recoil/states/tasksState";

const useStyles = createUseStyles(styles);

const CreateTaskPageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();
  const inputsProps = useLocalizedForm(getCreateTaskForm({}));

  const [inputs, setInputs] = useState({});

  const addTask = useSetRecoilState(tasksState);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.sidebar}>
        {inputs.priority}
        {inputs.teammate}
        {inputs.list}
      </Sidebar>
      <StackLayout
        column={5}
        className={classes.marginTop}
        orientation="vertical"
      >
        <Text type="h1">{locale("Create task")}</Text>
        <Form
          inputs={inputsProps}
          onSubmit={(data) => {
            return addTask(data);
          }}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}
        >
          {inputs.title}
          {inputs.description}
        </Form>
      </StackLayout>
    </GridLayout>
  );
};

export default CreateTaskPageContent;
