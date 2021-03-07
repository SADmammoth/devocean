import React, { Suspense } from "react";
import { ThemeProvider } from "react-jss";
import theme from "../theme";
import Header from "../components/generic/Header";
import { RecoilRoot } from "recoil";
import DebugObserver from "../dev/DebugObserver";
import ContentElement from "./ContentElement";

export default function _layout({ children }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="Loading...">
        <ThemeProvider theme={theme}>
          <Header />
          <ContentElement>{children}</ContentElement>
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}
