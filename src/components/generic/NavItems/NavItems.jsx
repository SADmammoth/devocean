import React, { useMemo } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRouteMatch, useLocation, matchPath } from 'umi';

import useLocale from '../../../helpers/hooks/useLocale';
import Button from '../Button';
import Interactive from '../Interactive';
import PanelCard from '../PanelCard';
import PopupButton from '../PopupButton';

import styles from './NavItems.styles';

const useStyles = createUseStyles(styles);

function NavItems({
  as,
  items,
  className,
  itemClass,
  itemContainerClass,
  activeItemClass,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const location = useLocation();
  const locale = useLocale();

  const InteractiveButton = Interactive(Button);
  const renderItems = useMemo(
    () =>
      items.map((item, index) => {
        const { id, title, label, link, onClick, menu } = item;
        return (
          <li
            key={id}
            title={locale(title)}
            aria-label={locale(title)}
            className={itemContainerClass}
            style={{ '--index': index }}>
            {menu ? (
              <PopupButton
                className={classNames(itemClass, {
                  [activeItemClass]: location.pathname.endsWith(link),
                })}
                buttonContent={
                  typeof label === 'string' ? locale(label) : label
                }
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
                className={classNames(itemClass, {
                  [activeItemClass]: location.pathname.endsWith(link),
                })}>
                {typeof label === 'string' ? locale(label) : label}
              </InteractiveButton>
            )}
          </li>
        );
      }),
    [items, location],
  );

  const As = as || 'ul';

  return (
    <As className={classNames(className, classes.navItems)}>{renderItems}</As>
  );
}

NavItems.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.func,
      ]).isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  itemClass: PropTypes.string,
  itemContainerClass: PropTypes.string,
};

export default NavItems;
