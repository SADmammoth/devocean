import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../../components/generic/Text';
import StretchLastLayout from '../../components/generic/layouts/StretchLastLayout';
import ItemsPage from '../ItemsPage/ItemsPage';

import styles from './TitledPage.styles';

const useStyles = createUseStyles(styles);

function TitledPage({
  isClockSidebar,
  sidebarTitle,
  sidebarContent,
  toolbarItems,
  title,
  children,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ItemsPage
      isClockSidebar={isClockSidebar}
      sidebarTitle={sidebarTitle}
      sidebarContent={sidebarContent}
      toolbarItems={toolbarItems}
      {...props}>
      <StretchLastLayout
        orientation="vertical"
        className={classes.workArea}
        nowrap>
        {!title || <Text type="h1">{title}</Text>}
        {children}
      </StretchLastLayout>
    </ItemsPage>
  );
}

TitledPage.propTypes = {};

export default TitledPage;
