import React from "react";
import PropTypes from "prop-types";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import Interactive from "../Interactive";

const NavItems = ({ as, items, itemClass, itemContainerClass }) => {
  const composite = useCompositeState({ loop: true });

  return (
    <Composite as={as} {...composite}>
      {items.map(({ id, title, label, link, onClick }) => {
        return (
          <li
            key={id}
            title={title}
            aria-label={title}
            className={itemContainerClass}
          >
            {Interactive(
              <CompositeItem {...composite} className={itemClass}>
                {label}
              </CompositeItem>,
              {
                onClick,
                link,
              }
            )}
          </li>
        );
      })}
    </Composite>
  );
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
