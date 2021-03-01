import React, { Suspense } from "react";
import StackLayout from "../components/generic/layouts/StackLayout";
import Footer from "../components/generic/Footer";
import ContainerLayout from "../components/generic/layouts/ContainerLayout";
import { ThemeProvider } from "react-jss";
import theme from "../theme";
import Header from "../components/generic/Header";
import { RecoilRoot } from "recoil";
import DebugObserver from "../dev/DebugObserver";

export default function _layout({ children }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="Loading...">
        <ThemeProvider theme={theme}>
          <StackLayout orientation="vertical">
            <Header />
            <ContainerLayout>{children}</ContainerLayout>
            <Footer />
          </StackLayout>
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}
