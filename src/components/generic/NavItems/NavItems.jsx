import React from "react";
import PropTypes from "prop-types";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import Interactive from "../Interactive";

const NavItems = ({ items, itemClass, itemContainerClass }) => {
  const composite = useCompositeState();

  return (
    <Composite {...composite}>
      {items.map(({ label, link, onClick }) => {
        return (
          <li key={label} className={itemContainerClass}>
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
