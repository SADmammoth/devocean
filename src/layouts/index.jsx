import React, { Suspense } from "react";
import Header from "../components/generic/Header";
import ContentElement from "../components/generic/ContentElement";

function _layout({ children }) {
  return (
    <>
      <Header />
      <ContentElement>{children}</ContentElement>
    </>
  );
}

_layout.wrappers = ["@/wrappers/recoil", "@/wrappers/jss", "@/wrappers/login"];

export default _layout;
