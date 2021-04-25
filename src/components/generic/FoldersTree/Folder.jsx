import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button as ReakitButton } from "reakit";
import useLocale from "../../../helpers/useLocale";
import FolderButton from "./FolderButton";

function Folder({
  id,
  as,
  classes,
  name,
  type,
  selectFolder,
  selected,
  childrenIds,
  requestFolderProps,
  selectedParent,

  isConstant,
}) {
  const locale = useLocale();

  const renderSubFolders = useCallback(() => {
    const subfolders =
      childrenIds && childrenIds.length && (selected || selectedParent)
        ? childrenIds.map((id) => {
            const folder = requestFolderProps(id);
            if (folder) return <Folder key={id} {...folder} />;
          })
        : null;

    return subfolders;
  }, [selected, selectedParent, childrenIds, id, requestFolderProps]);

  return (
    <div
      className={classNames(classes.folderTree, {
        [classes.selectedTree]: selected,
      })}
    >
      <FolderButton
        as={as}
        classes={classes}
        type={type}
        selected={selected}
        selectedParent={selectedParent}
        name={name}
        id={id}
        selectFolder={selectFolder}
        isConstant={isConstant}
      />
      <div aria-label={locale("Subfolders", { name })}>
        {renderSubFolders()}
      </div>
    </div>
  );
}

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["list", "folder"]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  childrenIds: PropTypes.arrayOf(PropTypes.string),
  requestFolderProps: PropTypes.func,
  selectedParent: PropTypes.bool,
};

Folder.defaultProps = {
  type: "folder",
  as: ReakitButton,
  onClick: () => {},
  selected: false,
};

export default Folder;
