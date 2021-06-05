import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../../generic/Text';

import styles from './TeammateStatusBadge.styles';

const useStyles = createUseStyles(styles);

function TeammateStatusBadge({ status, actualStatus }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Text
        type="common"
        className={classNames({
          [classes.actualActive]: actualStatus === 'online',
          [classes.actualIdle]: actualStatus === 'offline',
        })}>
        {_.capitalize(actualStatus)}
      </Text>
      {!status || (
        <Text
          type="common"
          className={classNames({
            [classes.working]: status === 'working',
            [classes.notWorking]: status === 'not working',
          })}>
          {_.capitalize(status)}
        </Text>
      )}
    </>
  );
}

TeammateStatusBadge.propTypes = {};

export default TeammateStatusBadge;
