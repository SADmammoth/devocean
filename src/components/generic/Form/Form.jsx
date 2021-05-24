import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import ReactForm from '@sadmammoth/react-form';
import '@sadmammoth/react-form/dist/index.css';

import Button from '../Button';
import FormLabel from '../FormLabel';
import Input from '../Input';

import styles from './Form.styles';

const useStyles = createUseStyles(styles);

function Form({ submitText, children, ...props }) {
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
      notify={(...data) => console.log(...data)}
      validationMaskDateTimeFormat="dd-MM-yyyy HH:mm"
      validationMaskDateFormat="dd-MM-yyyy"
      {...props}>
      {children}
    </ReactForm>
  );
}

Form.propTypes = {
  submitText: PropTypes.string,
  children: PropTypes.node,
};

Form.defaultProps = {
  submitText: 'Submit',
};

export default Form;
