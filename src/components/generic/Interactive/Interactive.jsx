import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useClickOrLink from '../../../helpers/hooks/useClickOrLink';

import styles from './Interactive.styles';

const useStyles = createUseStyles(styles);

const Interactive = (Child) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return ({ onClick, link, ...props }) => {
    const onClickHandler = useClickOrLink(onClick, link);

    return (
      <Child
        onClick={onClickHandler}
        className={classes.interactive}
        {...props}
      />
    );
  };
};

Interactive.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default Interactive;
