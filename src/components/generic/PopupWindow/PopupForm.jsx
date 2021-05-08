import React from "react";

import Form from "../Form";

import PropTypes from "prop-types";

function PopupForm({ inputs, onSubmit, submitText }) {
  return (
    <Form inputs={inputs} onSubmit={onSubmit} submitText={submitText}></Form>
  );
}

PopupForm.propTypes = {};

export default PopupForm;
