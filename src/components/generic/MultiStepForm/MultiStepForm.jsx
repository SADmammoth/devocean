import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../Form';

import styles from './MultiStepForm.styles';

const useStyles = createUseStyles(styles);

function MultiStepForm({
  steps,
  onSubmit,
  onSubmitStep,
  submitText,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const addData = (newData) =>
    setData((currentData) => {
      return { ...currentData, ...newData };
    });

  const stepForm = useCallback(
    async (formData) => {
      if (step < steps.length) {
        setStep((currentStep) => currentStep + 1);
        onSubmitStep(data);
        return addData(formData);
      }
      return await onSubmit({ ...data, ...formData });
    },
    [data],
  );

  return (
    <Form
      inputs={steps[step]}
      onSubmit={stepForm}
      submitText={step < steps.length ? 'Next' : submitText}
      {...props}
    />
  );
}

MultiStepForm.propTypes = {};

export default MultiStepForm;
