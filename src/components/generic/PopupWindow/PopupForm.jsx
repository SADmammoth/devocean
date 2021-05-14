import React from 'react';

import PropTypes from 'prop-types';

import Form from '../Form';

function PopupForm({ inputs, onSubmit, submitText }) {
  return (
    <Form inputs={inputs} onSubmit={onSubmit} submitText={submitText}></Form>
  );
}

PopupForm.propTypes = {};

export default PopupForm;
