import React, { useCallback, useEffect, useState } from "react";
import Interactive from "../Interactive";
import {
  FaFolder,
  FaList,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button as ReakitButton } from "reakit";
import useLocale from "../../../helpers/useLocale";
import Text from "../Text";
import StackLayout from "../layouts/StackLayout";
import FolderButton from "./FolderButton";

function Folder({
  id,
  as,
  classes,
  name,
  type,
  onClick,
  selected,
  childrenIds,
  requestFolderProps,
  selectedParent,
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

  const Icon = type === "folder" ? FaFolder : FaList;
  const OpenActionIcon =
    type === "folder"
      ? selected || selectedParent
        ? FaArrowUp
        : FaArrowDown
      : FaArrowRight;

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
        onClick={onClick}
      />
      <div aria-label={locale("Subfolders", { name })}>
        {renderSubFolders()}
      </div>
    </div>
  );
}

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["list", "folder"]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

Folder.defaultProps = {
  type: "folder",
  as: ReakitButton,
  onClick: () => {},
  selected: false,
};

export default Folder;
