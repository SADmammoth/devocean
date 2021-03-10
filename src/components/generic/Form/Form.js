import React from "react";
import FormModule from "@bit/sadmammoth.components.react-form";
import { Button } from "reakit";
import Input from "../Input";

function Form({ submitText = "Submit", ...props }) {
  const renderInput = (props) => {
    return <Input {...props} />;
  };

  const SubmitButton = <Button type="submit">{submitText}</Button>;

  return (
    <FormModule.default
      renderInput={renderInput}
      submitButton={SubmitButton}
      {...props}
    ></FormModule.default>
  );
}

export default Form;
