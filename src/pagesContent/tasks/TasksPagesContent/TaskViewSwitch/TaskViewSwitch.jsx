import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { FaBinoculars } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import PanelCard from '../../../../components/generic/PanelCard';
import PopupButton from '../../../../components/generic/PopupButton';
import positions from '../../../../components/generic/PopupButton/positions';
import views from './views';

import styles from './TaskViewSwitch.styles';

const useStyles = createUseStyles(styles);

function TaskViewSwitch({ currentView }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const buttons = useMemo(() => {
    return views.filter(({ id }) => {
      return id !== currentView;
    });
  }, [currentView]);

  return (
    <PopupButton buttonContent={<FaBinoculars />} position={positions.right}>
      <PanelCard>
        {buttons.map(({ title, link }) => {
          return <Link to={link}>{title}</Link>;
        })}
      </PanelCard>
    </PopupButton>
  );
}

TaskViewSwitch.propTypes = {};

export default TaskViewSwitch;
