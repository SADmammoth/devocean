import React from "react";
import { RecoilRoot } from "recoil";
import DebugObserver from "../dev/DebugObserver";

export default function recoil({ children }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      {children}
    </RecoilRoot>
  );
}
