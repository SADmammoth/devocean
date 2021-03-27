import React, { useCallback, useEffect, useState } from "react";
import Interactive from "../Interactive";
import { FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button, CompositeItem, CompositeGroup } from "reakit";
import useLocale from "../../../helpers/useLocale";

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
  composite,
}) {
  const InteractiveButton = Interactive(as);
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

  const Button = (props) => (
    <InteractiveButton
      {...props}
      focusable={false}
      className={classNames(classes[type], {
        [classes.selected]: selected,
        [classes.selectedParent]: selectedParent,
      })}
      onClick={() => onClick(id)}
      label={locale(type, { name })}
    >
      {name}
      <FaArrowRight />
    </InteractiveButton>
  );

  return (
    <div>
      <CompositeItem as={Button} {...composite}></CompositeItem>
      <CompositeGroup
        {...composite}
        aria-label={locale("Subfolders", { name })}
      >
        {renderSubFolders()}
      </CompositeGroup>
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
