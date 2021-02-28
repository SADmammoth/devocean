import React from "react";
import StackLayout from "../components/layouts/StackLayout";
import Footer from "../components/Footer";
import Container from "../components/Container/Container";
import { ThemeProvider } from "react-jss";
import theme from "../theme";
import Header from "../components/Header";

export default function _layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StackLayout orientation="vertical">
        <Header />
        <Container>{children}</Container>
        <Footer />
      </StackLayout>
    </ThemeProvider>
  );
}
