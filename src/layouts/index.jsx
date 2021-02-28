import React from "react";
import StackLayout from "../components/generic/layouts/StackLayout";
import Footer from "../components/generic/Footer";
import ContainerLayout from "../components/generic/layouts/ContainerLayout";
import { ThemeProvider } from "react-jss";
import theme from "../theme";
import Header from "../components/generic/Header";

export default function _layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StackLayout orientation="vertical">
        <Header />
        <ContainerLayout>{children}</ContainerLayout>
        <Footer />
      </StackLayout>
    </ThemeProvider>
  );
}
