import React from 'react';

import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import userState from '../recoil/states/userState';

export default function login({ children }) {
  const userId = useRecoilValue(userState);

  return (
    <>
      {children}
      {/* {userId || <Redirect to="/auth/login" />} */}
    </>
  );
}
