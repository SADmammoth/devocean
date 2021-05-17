import React, { useCallback } from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import ChangesCard from '../../../../components/specific/ChangesCard';
import historyState from '../../../../recoil/states/historyState';

import styles from './HistoryPageContent.styles';

const useStyles = createUseStyles(styles);

function HistoryPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useRecoilValueLoadable(historyState(id));

  const getChanges = ({ before, after }) => {
    if (!before || !after) {
      return;
    }

    return Object.fromEntries(
      Object.entries(after)
        .filter(
          ([key, value]) => !(!value && !before[key]) && value !== before[key],
        )
        .map(([key, value]) => {
          return [key, [before[key] || 'none', value]];
        }),
    );
  };

  const renderHistory = useCallback(() => {
    if (history.state === 'hasValue')
      return history.contents.slice(1).map((historyItem) => {
        const fields = getChanges(historyItem);
        if (_.isEmpty(fields)) return;
        return (
          <ChangesCard
            fields={fields}
            time={historyItem.time}
            author={historyItem.author}
          />
        );
      });
  }, [history.contents]);

  return (
    <ScrollLayout
      className={classes.content}
      orientation="vertical"
      scrollOrientation="vertical"
      gap="10px"
      blockSnapType="start"
      scrollPaddingStart="5px">
      {renderHistory()}
    </ScrollLayout>
  );
}

HistoryPageContent.propTypes = {};

export default HistoryPageContent;
