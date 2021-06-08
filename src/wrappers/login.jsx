import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import Client from '../helpers/services/Client';
import userState, { userDataState } from '../recoil/states/userState';

export default function login({ children }) {
  const user = useRecoilValue(userState);
  const currentUserData = useRecoilValue(userDataState);

  const path = window.location.pathname;

  if (!user && !path.startsWith('/auth') && path !== '/')
    return <Redirect to="/" />;

  if (currentUserData?.invited && path !== '/teammates/init')
    return <Redirect to={'/teammates/init'} />;

  return children;
}
