import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import Avatar from '../../generic/Avatar';
import HiddenLink from '../../generic/HiddenLink';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';

import styles from './TeammateTitle.styles';

const useStyles = createUseStyles(styles);

function TeammateTitle({ id, image, displayName }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <HiddenLink to={`/teammates/${id}`}>
      <StackLayout orientation="horizontal" alignY="center" gap="10px">
        <Avatar
          size="30px"
          displayName={displayName}
          image={image}
          labelledby={displayName}
        />
        <Text id={displayName} type="big" ellipsis>
          {displayName}
        </Text>
      </StackLayout>
    </HiddenLink>
  );
}

TeammateTitle.propTypes = {
  image: PropTypes.string,
  displayName: PropTypes.string,
};

export default TeammateTitle;
