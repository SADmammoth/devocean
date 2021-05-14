import React from 'react';

import { FaFilter } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import { FilterForm } from '@sadmammoth/react-list';

import PanelCard from '../../generic/PanelCard';
import PopupButton from '../../generic/PopupButton';

import styles from './FilterTool.styles';

const useStyles = createUseStyles(styles);

const FilterTool = ({ filters, applyFilter }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <PopupButton buttonContent={<FaFilter />} position="right">
      <PanelCard className={classes.popup}>
        <FilterForm inputs={filters} onSubmit={applyFilter} />
      </PanelCard>
    </PopupButton>
  );
};

export default FilterTool;
