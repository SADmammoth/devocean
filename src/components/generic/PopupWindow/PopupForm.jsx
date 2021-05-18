import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';
import Form from '../Form';
import StackLayout from '../layouts/StackLayout';

function PopupForm({ inputs, onSubmit, submitText, children }) {
  const SubmitButton = (props) => {
    return (
      <StackLayout gap="5px">
        <Button {...props}>{submitText}</Button>
        {children}
      </StackLayout>
    );
  };
  return (
    <Form
      inputs={inputs}
      onSubmit={onSubmit}
      submitButton={<SubmitButton type="submit" />}></Form>
  );
}

PopupForm.propTypes = {};

export default PopupForm;
