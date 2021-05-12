import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Document from './Document';

import styles from './EditDocumentPageContent.styles';

const useStyles = createUseStyles(styles);

function EditDocumentPageContent({ initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(initialValues);
  return (
    <>
      <Document data={initialValues?.content} onSubmit={onSubmit} />
    </>
  );
}

EditDocumentPageContent.propTypes = {};

export default EditDocumentPageContent;
