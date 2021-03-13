import React from "react";
import { ThemeProvider } from "react-jss";
import theme from "../theme";

export default function jss({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
