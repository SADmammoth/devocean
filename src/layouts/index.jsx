import React, { Suspense } from 'react';

import { useLocation } from 'umi';

import ContentElement from '../components/generic/ContentElement';
import SimpleHeader from '../components/generic/SimpleHeader';
import Header from '../components/specific/Header';

function _layout({ children }) {
  const { pathname } = useLocation();
  const isIndexPage = pathname === '/';
  const isAuthPage = pathname.startsWith('/auth');
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
