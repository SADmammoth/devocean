import React from 'react';

import { FaSort } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import { SortForm } from '@sadmammoth/react-list';

import PopupButton from '../../generic/PopupButton';

import styles from './SortTool.styles';

const useStyles = createUseStyles(styles);

const SortTool = ({ sorts, applySorts }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PopupButton buttonContent={<FaSort />}>
      {/* <SortForm inputs={sorts || {}} onSubmit={applySorts} /> */}
    </PopupButton>
  );
};

export default SortTool;
