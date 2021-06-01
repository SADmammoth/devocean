import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import ToolBar from '../ToolBar';
import StackLayout from '../layouts/StackLayout';
import OpenCloseButton from './OpenCloseButton';

import styles from './ExpandableToolBar.styles';

const useStyles = createUseStyles(styles);

function ExpandableToolBar({ className, items, style, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [expanded, setExpanded] = useState(false);

  const fullItems = items.map(({ label, title, ...rest }) => {
    return {
      label: (
        <StackLayout alignX="start" alignY="center" nowrap>
          {label}
          <Text type="common">{title}</Text>
        </StackLayout>
      ),
      title,
      ...rest,
    };
  });

  return (
    <ToolBar
      className={classNames(className, classes.expandableSidebar, {
        [classes.expanded]: expanded,
      })}
      items={expanded ? fullItems : items}
      style={style}
      precedingChildren={
        <OpenCloseButton classes={classes} setState={setExpanded} />
      }>
      {children}
    </ToolBar>
  );
}

ExpandableToolBar.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default ExpandableToolBar;
