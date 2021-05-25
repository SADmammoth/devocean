import React, { useMemo } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import Interactive from '../Interactive';
import PanelCard from '../PanelCard';
import PopupButton from '../PopupButton';

import styles from './NavItems.styles';

const useStyles = createUseStyles(styles);

function NavItems({ as, items, className, itemClass, itemContainerClass }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const InteractiveButton = Interactive(Button);
  const renderItems = useMemo(
    () =>
      items.map((item, index) => {
        const { id, title, label, link, onClick, menu } = item;
        return (
          <li
            key={id}
            title={title}
            aria-label={title}
            className={itemContainerClass}
            style={{ '--index': index }}>
            {menu ? (
              <PopupButton
                className={itemClass}
                buttonContent={label}
                position="right">
                <PanelCard>
                  <NavItems
                    items={menu}
                    itemContainerClass={classes.menuContainer}
                    itemClass={classes.menuItem}
                  />
                </PanelCard>
              </PopupButton>
            ) : (
              <InteractiveButton
                size="wide"
                onClick={onClick}
                link={link}
                className={itemClass}>
                {label}
              </InteractiveButton>
            )}
          </li>
        );
      }),
    [items],
  );

  const As = as || 'ul';

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
    }),
  ).isRequired,
  itemClass: PropTypes.string,
  itemContainerClass: PropTypes.string,
};

export default NavItems;
