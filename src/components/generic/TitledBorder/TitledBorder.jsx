import React, { useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';

import styles from './TitledBorder.styles';

const useStyles = createUseStyles(styles);

function TitledBorder({
  animated,
  title,
  containerClassName,
  borderClassName,
  labelProps,
  className,
  children,
  index,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const label = useRef(null);

  const [width, setWidth] = useState('100px');

  useEffect(() => {
    if (!label.current) return;
    const { width } = label.current.getBoundingClientRect();

    setWidth(parseInt(width) + 10 + 'px');
  }, [label.current]);

  return (
    <div
      className={classNames(
        classes.inputContainer,
        {
          [classes.animated]: animated,
        },
        containerClassName,
      )}
      style={{ '--index': index }}>
      <Text
        ref={label}
        className={classNames(className, classes.label)}
        as="label"
        type="small"
        {...labelProps}>
        {title}
      </Text>
      <div
        className={classNames(
          borderClassName,
          classes.border,
          classes.inputContainer,
        )}
        style={{ '--width': width }}>
        {children}
      </div>
    </div>
  );
}

TitledBorder.propTypes = {};

export default TitledBorder;
