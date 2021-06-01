import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import styles from './Avatar.styles';

const useStyles = createUseStyles(styles);

function Avatar({ displayName, image, size }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const displayImage = image || require('@/assets/images/avatar.jpg');

  return (
    <img
      className={classes.avatar}
      src={displayImage}
      alt="avatar"
      aria-labelledby={displayName}
      style={{ width: size, height: size }}
    />
  );
}

Avatar.propTypes = {
  displayName: PropTypes.string.isRequired,
  image: PropTypes.string,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  size: '30px',
};

export default Avatar;
