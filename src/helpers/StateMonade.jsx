import React from 'react';

import Spinner from '../components/generic/Spinner';

export default function StateMonade({ state, children }) {
  if (state === 'hasError') {
    console.error('Has error');
    return;
  }
  if (state === 'hasValue' || state === true) {
    return children;
  }
  return <Spinner />;
}
