import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import StackLayout from '../layouts/StackLayout';

import styles from './MenuItem.styles';

const useStyles = createUseStyles(styles);

function MenuItem({ label, icon }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout alignX="start" alignY="center" gap="5px">
      {icon}
      <Text type="common">{label}</Text>
    </StackLayout>
  );
}

MenuItem.propTypes = {};

export default MenuItem;
