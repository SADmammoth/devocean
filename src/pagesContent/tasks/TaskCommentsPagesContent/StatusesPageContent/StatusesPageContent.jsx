import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import ChangesCard from '../../../../components/specific/ChangesCard';
import statusChangesState from '../../../../recoil/states/statusChangesState';

import styles from './StatusesPageContent.styles';

const useStyles = createUseStyles(styles);

function StatusesPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const statusChanges = useRecoilValueLoadable(statusChangesState(id));

  const renderStatusChanges = useCallback(() => {
    if (statusChanges.state === 'hasValue') {
      return statusChanges.contents.map((statusChange) => {
        return (
          <ChangesCard
            fields={[
              statusChange.fromStatus?.name,
              statusChange.toStatus?.name,
            ]}
            time={statusChange.time}
            author={statusChange.author}
            text={statusChange.text}
            singleField
          />
        );
      });
    }
  }, [statusChanges.contents]);

  return (
    <ScrollLayout
      className={classes.content}
      orientation="vertical"
      scrollOrientation="vertical"
      blockSnapType="start"
      scrollPaddingStart="5px"
      gap="10px">
      {renderStatusChanges()}
    </ScrollLayout>
  );
}

StatusesPageContent.propTypes = {};

export default StatusesPageContent;
