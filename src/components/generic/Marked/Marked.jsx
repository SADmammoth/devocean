import React from 'react';

import classNames from 'classnames';
import { useTheme, createUseStyles } from 'react-jss';

import styles from './Marked.styles';

const useStyles = createUseStyles(styles);

const Marked = (status, child) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(classes.adornment, classes[status])}>
      {child}
    </div>
  );
};

export default Marked;
