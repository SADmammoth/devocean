import React from "react";
import Text from "../Text";
import PropTypes from "prop-types";

function FolderButton({
  as,
  classes,
  type,
  selected,
  selectedParent,
  name,
  id,
  onClick,
  ...props
}) {
  const InteractiveButton = Interactive(as);

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
        <OpenActionIcon />
      </StackLayout>
    </InteractiveButton>
  );
}

FolderButton.propTypes = {};

export default FolderButton;
