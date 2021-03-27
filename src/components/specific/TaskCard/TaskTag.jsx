import React from "react";

export default function TaskTag({ classes, tag }) {
  let tagColor, tagName;
  if (tag) ({ color: tagColor, name: tagName } = tag);

  return (
    <aside
      className={classes.colorTag}
      style={{ background: tagColor }}
      aria-label={tagName}
    >
      {tagName}
    </aside>
  );
}
