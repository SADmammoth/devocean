import React, { useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button as ReakitButton } from 'reakit';

import useLocale from '../../../helpers/hooks/useLocale';
import StackLayout from '../layouts/StackLayout';

function Folder({
  id,
  index,
  classes,
  name,
  type,
  selectFolder,
  selected,
  childrenIds,
  requestFolderProps,
  selectedParent,
  FolderBase,

  isConstant,
}) {
  const locale = useLocale();

  const [opened, setOpened] = useState(false);

  const renderSubFolders = useCallback(() => {
    const subfolders =
      childrenIds &&
      childrenIds.length &&
      (selected || opened || selectedParent)
        ? childrenIds.map((id) => {
            const folder = requestFolderProps(id);
            if (folder) return <Folder key={id} {...folder} />;
          })
        : null;

    return subfolders;
  }, [selected, selectedParent, childrenIds, id, requestFolderProps, opened]);

  return (
    <StackLayout
      orientation="vertical"
      className={classNames(classes.folderTree, {
        [classes.selectedTree]: selected,
      })}>
      <FolderBase
        index={index}
        type={type}
        selected={selected}
        selectedParent={selectedParent}
        opened={opened}
        setOpened={setOpened}
        name={name}
        id={id}
        selectFolder={selectFolder}
        isConstant={isConstant}
        parent={requestFolderProps(id).parent}
      />
      <div aria-label={locale('Subfolders', { name })}>
        {renderSubFolders()}
      </div>
    </StackLayout>
  );
}

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.func]),
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['list', 'folder']),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  childrenIds: PropTypes.arrayOf(PropTypes.string),
  requestFolderProps: PropTypes.func,
  selectedParent: PropTypes.bool,
};

Folder.defaultProps = {
  type: 'folder',
  as: ReakitButton,
  onClick: () => {},
  selected: false,
};

export default Folder;
