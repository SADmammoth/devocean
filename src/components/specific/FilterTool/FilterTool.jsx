import React from "react";
import { FilterForm } from "@sadmammoth/react-list";
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
      <FilterForm inputs={filters} onSubmit={applyFilter} />
    </PopupButton>
  );
};

export default FilterTool;
