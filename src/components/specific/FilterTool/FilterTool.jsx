import React from "react";

import convertFiltersToInputs from "./convertFiltersToInputs";

import Form from "../../generic/Form";

import { FaFilter } from "react-icons/fa";
import PopupButton from "../../generic/PopupButton";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./FilterTool.styles";

const useStyles = createUseStyles(styles);

const FilterTool = ({ filters, applyFilter }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PopupButton buttonContent={<FaFilter />}>
      <Form inputs={convertFiltersToInputs(filters)} onSubmit={applyFilter} />
    </PopupButton>
  );
};

export default FilterTool;
