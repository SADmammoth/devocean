import React, { useMemo } from "react";

import { FaBinoculars } from "react-icons/fa";

import PopupButton from "../../../components/generic/PopupButton";

import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TaskViewSwitch.styles";
import views from "./views";
import { Link } from "umi";
import positions from "../../../components/generic/PopupButton/positions";
import PanelCard from "../../../components/generic/PanelCard";

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
