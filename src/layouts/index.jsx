import React, { Suspense } from 'react';

import ContentElement from '../components/generic/ContentElement';
import Header from '../components/generic/Header';

function _layout({ children, match: { path } }) {
  return (
    <>
      <Header hideNotificationBadge={!path.startsWith('auth')} />
      <ContentElement>{children}</ContentElement>
    </>
  );
}

_layout.wrappers = [
  '@/wrappers/recoil',
  '@/wrappers/jss',
  '@/wrappers/login',
  '@/wrappers/popups',
];

export default _layout;
