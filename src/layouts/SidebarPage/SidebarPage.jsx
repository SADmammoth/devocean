import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Sidebar from '../../components/generic/Sidebar';
import GridLayout from '../../components/generic/layouts/GridLayout';
import ClockSidebar from '../../components/specific/ClockSidebar';

import styles from './SidebarPage.styles';

const useStyles = createUseStyles(styles);

function SidebarPage({
  isClockSidebar,
  sidebarTitle,
  sidebarContent,
  children,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <GridLayout className={classes.grid}>
      {isClockSidebar ? (
        <ClockSidebar column={3} className={classes.paddingTop} />
      ) : (
        <Sidebar title={sidebarTitle} column={3} className={classes.paddingTop}>
          {sidebarContent}
        </Sidebar>
      )}
      {children}
    </GridLayout>
  );
}

SidebarPage.propTypes = {};

export default SidebarPage;
