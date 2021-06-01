import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

function WorkDayBadge({ classes, children, isActive }) {
  return (
    <div
      className={classNames(classes.dayBadge, {
        [classes.active]: isActive,
        [classes.normal]: !isActive,
      })}>
      {children}
    </div>
  );
}

WorkDayBadge.propTypes = {};

export default WorkDayBadge;
