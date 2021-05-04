import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Interactive from "../Interactive";

import { useTheme, createUseStyles } from "react-jss";
import styles from "./NavItems.styles";
import classNames from "classnames";

const useStyles = createUseStyles(styles);

function NavItems({ as, items, className, itemClass, itemContainerClass }) {
  const theme = useTheme();
  const classes = useStyles(theme);

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

  const As = as || "ul";

  return (
    <As className={classNames(className, classes.navItems)}>{renderItems}</As>
  );
}

NavItems.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
  itemClass: PropTypes.string,
  itemContainerClass: PropTypes.string,
};

export default NavItems;
