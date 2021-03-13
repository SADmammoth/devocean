import React from "react";
import userState from "../recoil/states/userState";
import { useRecoilValue } from "recoil";
import { Redirect } from "umi";

export default function login({ children }) {
  const userId = useRecoilValue(userState);

  return (
    <>
      {children}
      {/* {userId || <Redirect to="/auth/login" />} */}
    </>
  );
}
