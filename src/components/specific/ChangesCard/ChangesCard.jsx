import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ChangesCard.styles";
import SingleFieldChange from "./SingleFieldChange";
import FieldsChanges from "./FieldsChanges";

const useStyles = createUseStyles(styles);

function ChangesCard({ fields, singleField, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (singleField) {
    return <SingleFieldChange from={fields[0]} to={fields[1]} {...props} />;
  }

  return <FieldsChanges fields={fields} {...props} />;
}

ChangesCard.propTypes = {};

export default ChangesCard;
