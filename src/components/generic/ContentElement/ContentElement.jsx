import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import ContainerLayout from '../layouts/ContainerLayout';

import styles from './ContentElement.styles';

const useStyles = createUseStyles(styles);

function ContentElement({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <main className={classes.main}>
      <ContainerLayout className={classes.content}>{children}</ContainerLayout>
    </main>
  );
}

ContentElement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentElement;
