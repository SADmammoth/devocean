import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import StackLayout from '../layouts/StackLayout';

import styles from './ToggleList.styles';

const useStyles = createUseStyles(styles);

function ToggleList({
  className,
  classNameShown,
  initialState,
  title,
  showMarker,
  children,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [show, setShow] = useState(initialState);

  return (
    <StackLayout
      className={classNames(classes.togglelist, {
        [className]: !show,
        [classNameShown]: show,
      })}>
      <header>
        <Button onClick={() => setShow((show) => !show)}>
          {show ? title.open : title.hidden}
          {!showMarker || (
            <div className={classes.marker}>
              {show ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          )}
        </Button>
      </header>
      {!show || <StackLayout orientation="vertical">{children}</StackLayout>}
    </StackLayout>
  );
}

ToggleList.propTypes = {};

export default ToggleList;
