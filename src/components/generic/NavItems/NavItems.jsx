import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Interactive from "../Interactive";

const NavItems = ({ as, items, itemClass, itemContainerClass }) => {
  const InteractiveButton = Interactive("button");
  const renderItems = useMemo(
    () =>
      items.map(({ id, title, label, link, onClick }) => {
        return (
          <li
            key={id}
            title={title}
            aria-label={title}
            className={itemContainerClass}
          >
            {
              <InteractiveButton
                onClick={onClick}
                link={link}
                className={itemClass}
              >
                {label}
              </InteractiveButton>
            }
          </li>
        );
      }),
    [items]
  );

  const As = as;

  return <As>{renderItems}</As>;
};

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default NavItems;
