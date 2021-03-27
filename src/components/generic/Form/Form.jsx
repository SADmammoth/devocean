import React from "react";
import FormModule from "@bit/sadmammoth.components.react-form";
import Input from "../Input";
import Button from "../Button";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Form.styles";

const useStyles = createUseStyles(styles);

function Form({ submitText = "Submit", children, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderInput = (props) => {
    return <Input {...props} />;
  };

  const SubmitButton = (
    <Button type="submit" className={classes.submit}>
      {submitText}
    </Button>
  );

  return (
    <FormModule.default
      render={{ Input: renderInput }}
      submitButton={SubmitButton}
      {...props}
    >
      {children}
    </FormModule.default>
  );
}

export default Form;
