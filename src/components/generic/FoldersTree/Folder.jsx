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
}) {
  const InteractiveButton = Interactive(as);
  const [selectedState, setSelectedState] = useState(selected);
  const [childSelected, setChildSelected] = useState(false);

  useEffect(() => {
    setSelectedState(selected);
  }, [selected]);

  useEffect(() => {
    if (!childSelected && !selected && selectedState) {
      setSelectedState(false);
    }
  }, [childSelected, selected, selectedState]);

  const renderSubFolders = useCallback(() => {
    const subfolders =
      childrenIds && childrenIds.length && (selectedState || childSelected)
        ? childrenIds.map((id) => {
            const folder = requestFolderProps(id);
            if (
              folder.selected &&
              !childSelected &&
              (!selectedState || !selected)
            )
              setChildSelected(true);

            if (folder) return <Folder key={id} {...folder} />;
          })
        : null;

    return subfolders;
  }, [
    selectedState,
    childSelected,
    selected,
    childrenIds,
    id,
    requestFolderProps,
  ]);

  return (
    <div>
      <InteractiveButton
        className={classNames(classes[type], {
          [classes.selected]: selected,
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
