import React from "react";

import StretchLayout from "../../components/generic/layouts/StretchLayout";

import NavItems from "../../components/generic/NavItems";

import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TaskCommentsPageContent.styles";
import views from "./views";
import GridLayout from "../../components/generic/layouts/GridLayout";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Sidebar from "../../components/generic/Sidebar";

const useStyles = createUseStyles(styles);

function TaskCommentsPageContent({ id, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.sidebar}>
        <NavItems items={views} />
      </Sidebar>
      <div column={5}>{children}</div>
    </GridLayout>
  );
}

TaskCommentsPageContent.propTypes = {};

export default TaskCommentsPageContent;
