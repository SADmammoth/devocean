import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./InteractiveCard.styles";
import useClickOrLink from "../../helpers/useClickOrLink";

const useStyles = createUseStyles(styles);

const InteractiveCard = ({ onClick, link, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const onClickHandler = useClickOrLink(onClick, link);

  return (
    <Clickable as="article" className={classes.card} onClick={onClickHandler}>
      {children}
    </Clickable>
  );
};

InteractiveCard.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default InteractiveCard;
