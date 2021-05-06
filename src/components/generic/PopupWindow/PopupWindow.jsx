import React from "react";

import themeGlobal from "../../../theme";

import PanelCard from "../PanelCard";

import PropTypes from "prop-types";
import { useTheme, createUseStyles, ThemeProvider } from "react-jss";
import styles from "./PopupWindow.styles";
import Button from "../Button";

const useStyles = createUseStyles(styles);

function PopupWindow({ onClose, closeButtonContent, children }) {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyles(theme);
  return (
    <>
      <PanelCard className={classes.popup} orientation="vertical" gap="20px">
        <div>{children}</div>
        <Button onClick={onClose}>{closeButtonContent}</Button>
      </PanelCard>
      <div className={classes.backdrop}></div>
    </>
  );
}

PopupWindow.propTypes = {};

export default (props) => (
  <ThemeProvider theme={themeGlobal}>
    <PopupWindow {...props} />
  </ThemeProvider>
);
