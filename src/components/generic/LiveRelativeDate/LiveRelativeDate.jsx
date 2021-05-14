import React, { useEffect } from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';

import componentUpdater from '../../../helpers/functions/componentUpdater';
import RelativeDate from '../../../helpers/types/RelativeDate';
import localeState from '../../../recoil/states/localeState';
import Text from '../Text';

import styles from './LiveRelativeDate.styles';

const useStyles = createUseStyles(styles);

function LiveRelativeDate({ date, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [relativeDate, update] = useState(new RelativeDate(date).toString());
  const { start, stop } = componentUpdater(0);

  const locale = useRecoilValue(localeState);

  useEffect(() => {
    start(() => {
      update(new RelativeDate(date).toString());
    });

    return () => stop();
  }, []);

  return (
    <Text
      {...props}
      as="time"
      title={new Date(date).toLocaleString(locale, {
        weekday: 'short',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })}
      dateTime={date.toString()}>
      {relativeDate}
    </Text>
  );
}

LiveRelativeDate.propTypes = {};

export default LiveRelativeDate;
