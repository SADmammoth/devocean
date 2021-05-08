import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../../components/generic/Text";
import Sidebar from "../../components/generic/Sidebar";
import useLocale from "../../helpers/useLocale";
import Form from "../../components/generic/Form";
import useLocalizedForm from "../../helpers/forms/useLocalizedForm";
import StackLayout from "../../components/generic/layouts/StackLayout";
import GridLayout from "../../components/generic/layouts/GridLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./EditTaskPageContent.styles";
import getCreateTaskForm from "../../helpers/forms/getCreateTaskForm";
import { useRecoilStateLoadable, useSetRecoilState } from "recoil";
import tasksState from "../../recoil/states/tasksState";
import templatesState from "../../recoil/states/templatesState";
import useTemplate from "./useTemplate";

const useStyles = createUseStyles(styles);

function EditTaskPageContent({ edit, initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const templateProps = useTemplate();
  const inputsProps = useLocalizedForm(
    getCreateTaskForm({ ...templateProps, ...initialValues })
  );

  const [inputs, setInputs] = useState({});

  const title = edit ? locale("Edit task") : locale("Create task");
  console.log(inputs.customFields);
  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.sidebar}>
        {inputs.priority}
        {inputs.estimate}
        {inputs.teammate}
        {inputs.list}
        {inputs.status}
        {inputs.template}
      </Sidebar>
      <StackLayout
        column={5}
        className={classes.marginTop}
        orientation="vertical"
      >
        <Text type="h1">{title}</Text>
        <Form
          inputs={inputsProps}
          onSubmit={onSubmit}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}
        >
          {inputs.title}
          {inputs.customFields
            ? Object.values(_.omit(inputs.customFields, "$title"))
            : null}
        </Form>
      </StackLayout>
    </GridLayout>
  );
}

EditTaskPageContent.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    priority: PropTypes.string,
    estimate: PropTypes.shape({
      toString: PropTypes.func,
    }),
    reportedTime: PropTypes.shape({
      toString: PropTypes.func,
    }),
    list: PropTypes.string.isRequired,
    teammate: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default EditTaskPageContent;
