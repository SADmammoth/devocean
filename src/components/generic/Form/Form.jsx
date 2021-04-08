import React from "react";
import FormLabel from "./FormLabel";
import ReactForm from "@sadmammoth/react-form";
import Input from "../Input";
import Button from "../Button";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Form.styles";

const useStyles = createUseStyles(styles);

function Form({ submitText = "Submit", children, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const SubmitButton = (
    <Button type="submit" className={classes.submit}>
      {submitText}
    </Button>
  );

  return (
    <ReactForm
      render={{ Input, Label: FormLabel }}
      submitButton={SubmitButton}
      notify={(data) => console.log(data)}
      {...props}
    >
      {children}
    </ReactForm>
  );
}

export default Form;
