import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import Interactive from "../Interactive";

const NavItems = ({ as, items, itemClass, itemContainerClass }) => {
  const composite = useCompositeState({ loop: true });

  const InteractiveCompositeItem = Interactive(CompositeItem);

  const renderItems = useMemo(() => {
    items.map(({ id, title, label, link, onClick }) => {
      return (
        <li
          key={id}
          title={title}
          aria-label={title}
          className={itemContainerClass}
        >
          {
            <InteractiveCompositeItem
              {...composite}
              onClick={onClick}
              link={link}
              className={itemClass}
            >
              {label}
            </InteractiveCompositeItem>
          }
        </li>
      );
    });
  }, [JSON.stringify(items)]);

  return (
    <Composite as={as} {...composite}>
      {renderItems}
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
