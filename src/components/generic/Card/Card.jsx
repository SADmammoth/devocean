import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import styles from './Card.styles';

const useStyles = createUseStyles(styles);

function Card({ index, as, className, children, style, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const As = as || 'div';

  return (
    <As className={classes.cardWrapper} {...props}>
      <div
        className={classNames(classes.card, className)}
        style={{ '--index': index }}>
        {children}
      </div>
    </As>
  );
}

Card.propTypes = {};

export default Card;
