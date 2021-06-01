import React from 'react';

import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import userState from '../recoil/states/userState';

export default function popups({ children }) {
  return (
    <>
      <div id="popups"></div>
      {children}
    </>
  );
}
