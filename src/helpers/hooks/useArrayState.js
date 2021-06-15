import { useState } from 'react';

import generateId from '../functions/generateId';

export default function useArrayState() {
  const [array, setArray] = useState([]);

  const remove = (itemId) => {
    setArray((array) => {
      const index = array.findIndex(({ id }) => itemId === id);
      return [...array.slice(0, index), ...array.slice(index + 1)];
    });
  };

  const clear = () => {
    setArray([]);
  };

  const add = (arrayItem) => {
    const id = generateId();
    setArray((array) => {
      return [...array, { id, ...arrayItem }];
    });
  };

  return [array, add, remove, clear];
}
