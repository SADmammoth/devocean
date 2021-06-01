import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import notificationsState from '../../../recoil/states/notificationsState';
import Button from '../../generic/Button';

import styles from './AddNotification.styles';

const useStyles = createUseStyles(styles);

const AddNotification = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addNotification = useSetRecoilState(notificationsState);

  return (
    <>
      <Button
        onClick={() =>
          addNotification({
            time: '4h ago',
            title: 'Notification',
            author: 'Doe',
          })
        }>
        Add notification
      </Button>
    </>
  );
};

export default AddNotification;
