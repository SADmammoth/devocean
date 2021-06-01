import { useCallback, useState } from 'react';

import getParentsOfTreeNode from '../../../recoil/helpers/getParentsOfTreeNode';
import treeArrayToMap from '../../../recoil/helpers/treeArrayToMap';

export default function useSelectedFolder(folders) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedParents, setSelectedParents] = useState([]);
  const selectFolder = useCallback(
    (folderId) => {
      if (folderId === null) {
        setSelectedIndex(-1);
        return;
      }
      const index = folders.findIndex(({ id }) => id === folderId);
      setSelectedIndex(index);
      const parents = getParentsOfTreeNode(folderId, treeArrayToMap(folders));
      setSelectedParents(parents.map((item, index) => item));
    },
    [folders, selectedIndex],
  );

  return [selectedIndex, selectedParents, selectFolder];
}
