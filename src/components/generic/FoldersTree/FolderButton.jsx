import React from "react";

import HiddenLink from "../HiddenLink";

import useLocale from "../../../helpers/useLocale";

import classNames from "classnames";
import PropTypes from "prop-types";
import Interactive from "../Interactive";
import {
  FaFolder,
  FaList,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
  FaEdit,
} from "react-icons/fa";
import Text from "../Text";
import StackLayout from "../layouts/StackLayout";

function FolderButton({
  as,
  classes,
  type,
  selected,
  selectedParent,
  name,
  id,
  onClick,
  isConstant,
  ...props
}) {
  const InteractiveButton = Interactive(as);

  const locale = useLocale();

  const Icon = type === "folder" ? FaFolder : FaList;
  const OpenActionIcon =
    type === "folder"
      ? selected || selectedParent
        ? FaArrowUp
        : FaArrowDown
      : FaArrowRight;

  return (
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
      <StackLayout alignX="start" alignY="center" gap="5px">
        <Icon />
        <Text type="common" ellipsis>
          {name}
        </Text>
        {isConstant || (
          <HiddenLink to={`/collections/${id}/edit`}>
            <FaEdit />
          </HiddenLink>
        )}

        <OpenActionIcon />
      </StackLayout>
    </InteractiveButton>
  );
}

FolderButton.propTypes = {
  id: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["list", "folder"]),
  selected: PropTypes.bool,
  selectedParent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default FolderButton;
