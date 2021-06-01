import React from 'react';

import Spinner from '../../components/generic/Spinner';

export default function StateMonade({ state, children, onError }) {
  if (state === 'hasError') {
    throw onError ? onError() : 'Has error';
  }
  if (state === 'hasValue' || state === true) {
    return children;
  }
  return <Spinner />;
}
