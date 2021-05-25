import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import NestedContainerLayout from '../layouts/NestedContainerLayout';
import StackLayout from '../layouts/StackLayout';
import StretchLastLayout from '../layouts/StretchLastLayout';

import styles from './Sidebar.styles';

const useStyles = createUseStyles(styles);

function Sidebar({ children, className, style, title }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (!title) {
    return (
      <NestedContainerLayout
        as="aside"
        className={classNames(classes.sidebar, className)}
        style={style}
        margin="30px">
        {children}
      </NestedContainerLayout>
    );
  } else {
    return (
      <StretchLastLayout
        orientation="vertical"
        as="aside"
        className={classNames(className, classes.root, classes.titledSidebar)}
        style={style}>
        <Text type="big" className={classes.title}>
          {title}
        </Text>
        <NestedContainerLayout
          as="aside"
          className={classNames(classes.sidebar)}
          margin="30px">
          {children}
        </NestedContainerLayout>
      </StretchLastLayout>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Sidebar;
