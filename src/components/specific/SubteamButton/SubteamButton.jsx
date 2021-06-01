import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import Button from '../../generic/Button';
import Interactive from '../../generic/Interactive';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';

import styles from './SubteamButton.styles';

const useStyles = createUseStyles(styles);

function SubteamButton({
  name,
  id,
  parent,
  selected,
  selectedParent,
  selectFolder,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const InteractiveButton = Interactive(Button);

  const OpenActionIcon = selected || selectedParent ? FaArrowUp : FaArrowDown;

  return (
    <InteractiveButton
      {...props}
      focusable={false}
      className={classNames(classes.subteam, {
        [classes.selected]: selected,
        [classes.selectedParent]: selectedParent,
      })}
      onClick={() => selectFolder(selected ? parent : id)}>
      <StackLayout alignX="spaceBetween" alignY="center" gap="5px">
        <Text type="common" ellipsis>
          {name}
        </Text>
        <OpenActionIcon />
      </StackLayout>
    </InteractiveButton>
  );
}

SubteamButton.propTypes = {};

export default SubteamButton;
