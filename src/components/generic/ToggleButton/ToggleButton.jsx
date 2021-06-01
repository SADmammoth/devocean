import React, { useState, useCallback, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import sizes from '../Button/sizes';

import styles from './ToggleButton.styles';

const useStyles = createUseStyles(styles);

function ToggleButton({ className, states, current, size }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [index, setIndex] = useState(current);

  const getNext = (index) => {
    if (index >= states.length - 1) {
      return 0;
    }

    return index + 1;
  };

  const onClick = useCallback(() => {
    states[index].action();
    setIndex((index) => getNext(index));
  }, [index, states]);

  const showLabel = useCallback(() => {
    return states[index].label;
  }, [states, index]);

  return (
    <Button className={className} onClick={onClick} size={size}>
      {showLabel()}
    </Button>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      action: PropTypes.func.isRequired,
    }),
  ).isRequired,
  current: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

ToggleButton.defaultProps = {
  current: 0,
};

export default ToggleButton;
