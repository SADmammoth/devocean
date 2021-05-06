import React from "react";
import userState from "../recoil/states/userState";
import { useRecoilValue } from "recoil";
import { Redirect } from "umi";

export default function popups({ children }) {
  return (
    <>
      <div id="popups"></div>
      {children}
    </>
  );
}
