import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import Client from '../helpers/services/Client';
import userState, { userDataState } from '../recoil/states/userState';

export default function login({ children }) {
  const user = useRecoilValue(userState);
  const currentUserData = useRecoilValue(userDataState);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const request = async () => setUserData(await Client.user.getData(user));
    if (currentUserData?.invited) request();
  });

  const path = window.location.pathname;

  if (!user && !path.startsWith('/auth') && path !== '/')
    return <Redirect to="/auth/login" />;

  if (userData?.invited && path !== `/teammates/init`)
    return <Redirect to={`/teammates/init`} />;

  return children;
}
