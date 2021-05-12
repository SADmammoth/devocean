import React from 'react';

import Blocks from 'editorjs-blocks-react-renderer';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import styles from './DocumentContentPage.styles';

const useStyles = createUseStyles(styles);

function DocumentContentPage({ initialValues }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(initialValues);
  return <Blocks data={initialValues.content || { blocks: [] }} />;
}

DocumentContentPage.propTypes = {};

export default DocumentContentPage;
