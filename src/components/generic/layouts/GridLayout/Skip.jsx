import React from "react";
import PropTypes from "prop-types";

function Skip({ column }) {
  return <></>;
}

Skip.propTypes = {
  column: PropTypes.number.isRequired,
};

export default Skip;
