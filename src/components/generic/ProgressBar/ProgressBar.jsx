import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import orientations from './orientations';

import styles from './ProgressBar.styles';

const useStyles = createUseStyles(styles);

function ProgressBar({ className, progress, orientation }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  let isOverflowed = false;

  if (progress > 1) {
    isOverflowed = true;
    progress = 1 / progress;
  }

  return (
    <div
      className={classNames(
        className,
        classes.progressbar,
        classes[orientations[orientation]],
        {
          [classes.overflowed]: isOverflowed,
          [classes.normal]: !isOverflowed,
        },
      )}
      style={{ '--progress': `${progress * 100}%` }}
      aria-label={locale('progressLabel', { progress: progress * 100 })}>
      <div className={classes.value}>{progress}</div>
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(Object.keys(orientations)),
};

ProgressBar.defaultProps = {
  orientation: 'vertical',
};

export default ProgressBar;
