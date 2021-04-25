import { useCallback, useState } from "react";
import getParentsOfFolderTree from "../../../recoil/helpers/getParentsOfFolderTree";
import treeArrayToMap from "../../../recoil/helpers/treeArrayToMap";

export default function useSelectedFolder(folders) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedParents, setSelectedParents] = useState([]);
  const selectFolder = useCallback(
    (folderId) => {
      const index = folders.findIndex(({ id }) => id === folderId);
      setSelectedIndex(index);
      const parents = getParentsOfFolderTree(
        folderId,
        treeArrayToMap(folders)
      ).slice(0, -1);
      setSelectedParents(parents.map((item, index) => index));
    },
    [folders, selectedIndex]
  );

  return [selectedIndex, selectedParents, selectFolder];
}
