import React from 'react';

import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import ToggleButton from '../ToggleButton';

function OpenCloseButton({ classes, setState }) {
  return (
    <ToggleButton
      size="fluid"
      className={classes.openCloseButton}
      states={[
        {
          label: <FaChevronLeft />,
          action: () => setState(true),
        },
        {
          label: <FaChevronRight />,
          action: () => setState(false),
        },
      ]}
    />
  );
}

OpenCloseButton.propTypes = {
  classes: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default OpenCloseButton;
