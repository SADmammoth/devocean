import React from "react";
import { SortForm } from "@sadmammoth/react-list";
import { FaSort } from "react-icons/fa";
import PopupButton from "../../generic/PopupButton";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./SortTool.styles";

const useStyles = createUseStyles(styles);

const SortTool = ({ sorts, applySorts }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PopupButton buttonContent={<FaSort />}>
      {/* <SortForm inputs={sorts || {}} onSubmit={applySorts} /> */}
    </PopupButton>
  );
};

export default SortTool;
