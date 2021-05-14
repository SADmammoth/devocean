import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  FaFolder,
  FaList,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
  FaEdit,
} from 'react-icons/fa';

import useLocale from '../../../helpers/hooks/useLocale';
import Button from '../../generic/Button';
import HiddenLink from '../../generic/HiddenLink';
import Interactive from '../../generic/Interactive';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';
import FolderDropArea from './FolderDropArea';

function TaskFolderButton({
  classes,
  type,
  selected,
  selectedParent,
  name,
  id,
  selectFolder,
  isConstant,
  ...props
}) {
  const InteractiveButton = Interactive(Button);

  const locale = useLocale();

  const Icon = type === 'folder' ? FaFolder : FaList;
  const OpenActionIcon =
    type === 'folder'
      ? selected || selectedParent
        ? FaArrowUp
        : FaArrowDown
      : FaArrowRight;

  const ButtonContent = (
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
  );

  return (
    <InteractiveButton
      {...props}
      focusable={false}
      className={classNames(classes[type], {
        [classes.selected]: selected,
        [classes.selectedParent]: selectedParent,
      })}
      onClick={() => selectFolder(id)}
      label={locale(type, { name })}>
      {type === 'list' && !selected && !selectedParent ? (
        <FolderDropArea id={id} selectFolder={selectFolder}>
          {ButtonContent}
        </FolderDropArea>
      ) : (
        ButtonContent
      )}
    </InteractiveButton>
  );
}

TaskFolderButton.propTypes = {
  id: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['list', 'folder']),
  selected: PropTypes.bool,
  selectedParent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TaskFolderButton;
