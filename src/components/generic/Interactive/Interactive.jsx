import React from "react";
import PropTypes from "prop-types";
import useClickOrLink from "../../../helpers/useClickOrLink";

const InteractiveCard = (child, { onClick, link }) => {
  const onClickHandler = useClickOrLink(onClick, link);

  return React.cloneElement(child, { onClick: onClickHandler });
};

InteractiveCard.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default InteractiveCard;
