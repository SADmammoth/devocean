import React, { Suspense } from 'react';

import ContentElement from '../components/generic/ContentElement';
import Header from '../components/specific/Header';

function _layout({ children }) {
  const path = window.location.pathname;
  return (
    <>
      <Header
        hideNotificationBadge={path.startsWith('/auth') || path === '/'}
        hideNavigation={path.startsWith('/auth') || path === '/'}
      />
      <ContentElement>{children}</ContentElement>
    </>
  );
}

_layout.wrappers = [
  '@/wrappers/errorBoundary',
  '@/wrappers/recoil',
  '@/wrappers/jss',
  '@/wrappers/login',
  '@/wrappers/popups',
];

export default _layout;
