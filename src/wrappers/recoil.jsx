import React, { useEffect } from 'react';

import { useRecoilSnapshot, RecoilRoot } from 'recoil';

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    [...snapshot.getNodes_UNSTABLE({ isModified: true })].map((node) => {
      if (process.env.NODE_ENV === 'development') {
        console.groupCollapsed(node.key + ' RECOIL DEV');
        console.log(snapshot.getLoadable(node).state);
        console.log(snapshot.getLoadable(node).contents);
        console.groupEnd();
      }
    });
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
