import React from "react";

import { IntlProvider } from "umi";

import themeGlobal from "../../../theme";

import PanelCard from "../PanelCard";

import PropTypes from "prop-types";
import { useTheme, createUseStyles, ThemeProvider } from "react-jss";
import styles from "./PopupWindow.styles";
import Button from "../Button";
import PopupForm from "./PopupForm";

const useStyles = createUseStyles(styles);

function PopupWindow({ inputs, onClose, closeButtonContent, children }) {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyles(theme);

  if (inputs) {
    children = [
      <PopupForm
        inputs={inputs}
        onSubmit={onClose}
        submitText={closeButtonContent}
      />,
      ...children,
    ];
  } else {
    children = [
      ...children,
      <Button onClick={onClose}>{closeButtonContent}</Button>,
    ];
  }

  return (
    <>
      <PanelCard className={classes.popup} orientation="vertical" gap="20px">
        <div>{children}</div>
      </PanelCard>
      <div className={classes.backdrop}></div>
    </>
  );
}

PopupWindow.propTypes = {};

export default (props) => (
  <IntlProvider>
    <ThemeProvider theme={themeGlobal}>
      <PopupWindow {...props} />
    </ThemeProvider>
  </IntlProvider>
);
