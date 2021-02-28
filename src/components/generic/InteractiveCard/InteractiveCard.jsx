import React from "react";
import { CompositeItem } from "reakit";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./InteractiveCard.styles";
import useClickOrLink from "../../../helpers/useClickOrLink";

const useStyles = createUseStyles(styles);

const InteractiveCard = ({ className, onClick, link, children, composite }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const onClickHandler = useClickOrLink(onClick, link);

  return (
    <CompositeItem
      {...composite}
      as="article"
      className={classNames(className, classes.card)}
      onClick={onClickHandler}
    >
      {children}
    </CompositeItem>
  );
};

InteractiveCard.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default InteractiveCard;
