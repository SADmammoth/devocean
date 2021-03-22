import React, { useCallback, useEffect, useState } from "react";
import Interactive from "../Interactive";
import { FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "reakit";

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
  const InteractiveButton = Interactive(as);

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
    <div>
      <InteractiveButton
        className={classNames(classes[type], {
          [classes.selected]: selected,
          [classes.selectedParent]: selectedParent,
        })}
        onClick={() => onClick(id)}
      >
        {name}
        <FaArrowRight />
      </InteractiveButton>
      {renderSubFolders()}
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
  as: Button,
  onClick: () => {},
  selected: false,
};

export default Folder;
