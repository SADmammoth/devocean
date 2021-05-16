import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../Form';
import Text from '../Text';
import StackLayout from '../layouts/StackLayout';

import styles from './MultiStepForm.styles';

const useStyles = createUseStyles(styles);

function MultiStepForm({
  steps,
  onSubmit,
  onSubmitStep = () => {},
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
      if (step < steps.length - 1) {
        setStep((currentStep) => currentStep + 1);
        onSubmitStep(data);
        return addData(formData);
      }
      return await onSubmit({ ...data, ...formData });
    },
    [data],
  );

  console.log(step);

  return (
    <StackLayout orientation="vertical" gap="20px">
      <Text type="big" bold>
        {steps[step].$title}
      </Text>
      <Form
        inputs={steps[step].inputs}
        onSubmit={stepForm}
        submitText={step < steps.length - 1 ? 'Next' : submitText}
        {...props}
      />
    </StackLayout>
  );
}

MultiStepForm.propTypes = {};

export default MultiStepForm;
