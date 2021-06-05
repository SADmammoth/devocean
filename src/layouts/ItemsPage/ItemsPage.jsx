import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Sidebar from '../../components/generic/Sidebar';
import GridLayout from '../../components/generic/layouts/GridLayout';
import StretchLastLayout from '../../components/generic/layouts/StretchLastLayout';
import StretchLayout from '../../components/generic/layouts/StretchLayout';
import ClockSidebar from '../../components/specific/ClockSidebar';
import FeatureDependentToolbar from '../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import SidebarPage from '../SidebarPage/SidebarPage';

import styles from './ItemsPage.styles';

const useStyles = createUseStyles(styles);

function ItemsPage({
  isClockSidebar,
  sidebarTitle,
  sidebarContent,
  toolbarItems,
  children,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <SidebarPage
      isClockSidebar={isClockSidebar}
      sidebarTitle={sidebarTitle}
      sidebarContent={sidebarContent}>
      <StretchLayout className={classNames(classes.paddingTop)} column={7}>
        {children}
      </StretchLayout>
      {toolbarItems ? (
        <FeatureDependentToolbar column={1} expandable items={toolbarItems} />
      ) : null}
    </SidebarPage>
  );
}

ItemsPage.propTypes = {};

export default ItemsPage;
