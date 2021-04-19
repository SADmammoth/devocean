import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ToggleButton.styles";
import Button from "../Button";
import sizes from "../Button/sizes";

const useStyles = createUseStyles(styles);

function ToggleButton({ className, states, current, size }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [index, setIndex] = useState(current);

  const getNextIndex = useCallback(() => {
    if (index >= states.length - 1) {
      return 0;
    }

    return index + 1;
  }, [index, states]);

  return (
    <Button
      className={className}
      onClick={() => {
        const currentIndex = getNextIndex();
        setIndex(currentIndex);
        states[currentIndex].action();
      }}
      size={size}
    >
      {states[getNextIndex()].label}
    </Button>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  current: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

ToggleButton.defaultProps = {
  current: 0,
};

export default ToggleButton;
