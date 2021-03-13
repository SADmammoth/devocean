import React, { useEffect } from "react";
import { useRecoilSnapshot, RecoilRoot } from "recoil";

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};

export default function recoil({ children }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      {children}
    </RecoilRoot>
  );
}
