import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../layouts/StackLayout';

import styles from './PanelCard.styles';

const useStyles = createUseStyles(styles);

function PanelCard({ className, children, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout
      {...props}
      className={classNames(classes.panelCard, className)}>
      {children}
    </StackLayout>
  );
}

PanelCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PanelCard;
