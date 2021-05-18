import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';
import Form from '../Form';
import StackLayout from '../layouts/StackLayout';

function PopupForm({ inputs, onSubmit, submitText, children }) {
  return (
    <Form
      inputs={inputs}
      onSubmit={onSubmit}
      submitButton={(props) => {
        return (
          <StackLayout gap="5px">
            <Button>{submitText}</Button>
            {children}
          </StackLayout>
        );
      }}></Form>
  );
}

PopupForm.propTypes = {};

export default PopupForm;
