import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ToggleButton.styles";
import Button from "../Button";

const useStyles = createUseStyles(styles);

const ToggleButton = ({ states, current }) => {
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
      onClick={() => {
        const currentIndex = getNextIndex();
        setIndex(currentIndex);
        states[currentIndex].action();
      }}
    >
      {states[getNextIndex()].label}
    </Button>
  );
};

ToggleButton.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  current: PropTypes.number,
};

ToggleButton.defaultProps = {
  current: 0,
};

export default ToggleButton;
