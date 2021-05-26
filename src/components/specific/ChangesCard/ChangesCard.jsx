import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import FieldsChanges from './FieldsChanges';
import SingleFieldChange from './SingleFieldChange';

import styles from './ChangesCard.styles';

const useStyles = createUseStyles(styles);

function ChangesCard({ className, index, fields, singleField, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (singleField) {
    return (
      <SingleFieldChange
        index={index}
        classes={classes}
        className={classNames(className, classes.card)}
        from={fields[0]}
        to={fields[1]}
        {...props}
      />
    );
  }

  return (
    <FieldsChanges
      index={index}
      classes={classes}
      className={classNames(className, classes.card)}
      fields={fields}
      {...props}
    />
  );
}

ChangesCard.propTypes = {};

export default ChangesCard;
