import React from "react";
import FormLabel from "../../generic/Form/FormLabel";
import Input from "../../generic/Input/Input";
import PanelCard from "../../generic/PanelCard";
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
    <PopupButton buttonContent={<FaFilter />} position="right">
      <PanelCard className={classes.popup}>
        <FilterForm inputs={filters} onSubmit={applyFilter} />
      </PanelCard>
    </PopupButton>
  );
};

export default FilterTool;
