import React from "react";
import PropTypes from "prop-types";

function TaskTag({ classes, color, name }) {
  return (
    <aside
      className={classes.colorTag}
      style={{ background: color }}
      aria-label={name}
    >
      {name}
    </aside>
  );
}

TaskTag.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TaskTag;
