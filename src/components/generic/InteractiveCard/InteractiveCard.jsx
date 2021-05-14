import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useClickOrLink from '../../../helpers/hooks/useClickOrLink';

import styles from './InteractiveCard.styles';

const useStyles = createUseStyles(styles);

const InteractiveCard = ({ className, onClick, link, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const onClickHandler = useClickOrLink(onClick, link);

  return (
    <div
      as="article"
      className={classNames(className, classes.card)}
      onClick={onClickHandler}>
      {children}
    </div>
  );
};

InteractiveCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default InteractiveCard;
