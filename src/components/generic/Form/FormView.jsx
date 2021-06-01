import React from 'react';

import PropTypes from 'prop-types';

import StackLayout from '../layouts/StackLayout';

function FormView({ classes, children, ...props }) {
  return (
    <form {...props}>
      {!children || (
        <StackLayout orientation="vertical" gap="10px" alignX="start">
          {children}
        </StackLayout>
      )}
    </form>
  );
}

FormView.propTypes = {};

export default FormView;
