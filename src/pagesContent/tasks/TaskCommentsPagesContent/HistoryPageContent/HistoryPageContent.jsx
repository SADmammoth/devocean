import React, { useCallback } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import LoadableItemsList from '../../../../components/generic/LoadableItemsList';
import Text from '../../../../components/generic/Text';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import ChangesCard from '../../../../components/specific/ChangesCard';
import historyState from '../../../../recoil/states/historyState';
import { tasksState_getById } from '../../../../recoil/states/tasksState';

import styles from './HistoryPageContent.styles';

const useStyles = createUseStyles(styles);

function HistoryPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useRecoilValueLoadable(historyState(id));
  const task = useRecoilValue(tasksState_getById(id));

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

  const ItemsContainer = ({ className, children }) => (
    <ScrollLayout
      className={className}
      orientation="vertical"
      scrollOrientation="vertical"
      gap="10px"
      blockSnapType="start"
      scrollPaddingStart="5px"
      nowrap>
      {children}
    </ScrollLayout>
  );

  return (
    <StackLayout
      orientation="vertical"
      className={classes.content}
      nowrap
      gap="10px">
      <h1>
        <Text as="span" className={classes.title} type="h1">
          {'Changes history for task'}
        </Text>
        {!task || (
          <Text as="span" type="big" lines={1} title={task.title}>
            {task.title}
          </Text>
        )}
      </h1>
      <LoadableItemsList
        className={classes.content}
        placeholderClassName={classNames(classes.placeholder)}
        as={ItemsContainer}
        items={history}
        renderItem={(historyItem) => {
          const fields = getChanges(historyItem);
          if (_.isEmpty(fields)) return;
          return (
            <ChangesCard
              key={historyItem.id}
              className={classes.history}
              fields={fields}
              time={historyItem.time}
              author={historyItem.author}
            />
          );
        }}
        processors={[{ slice: [1] }]}
      />
    </StackLayout>
  );
}

HistoryPageContent.propTypes = {};

export default HistoryPageContent;
