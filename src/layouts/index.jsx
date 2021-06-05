import React, { Suspense } from 'react';

import ContentElement from '../components/generic/ContentElement';
import SimpleHeader from '../components/generic/SimpleHeader';
import Header from '../components/specific/Header';

function _layout({ children }) {
  const path = window.location.pathname;
  const isIndexPage = path === '/';
  const isAuthPage = path.startsWith('/auth');
  const header = isAuthPage ? (
    <SimpleHeader />
  ) : (
    <Header hideNotificationBadge={isIndexPage} hideNavigation={isIndexPage} />
  );
  return (
    <>
      {header}
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
