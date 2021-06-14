import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'umi';

import IndexLayout from './IndexLayout';

function Index(props) {
  return (
    <>
      <Helmet></Helmet>
      <IndexLayout {...props} />
    </>
  );
}

Index.propTypes = {};

Index.wrappers = [
  '@/wrappers/errorBoundary',
  '@/wrappers/recoil',
  '@/wrappers/jss',
  '@/wrappers/login',
  '@/wrappers/popups',
];

export default Index;
