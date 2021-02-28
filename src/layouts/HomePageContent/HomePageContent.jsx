import React from "react";
import StackLayout from "../../components/layouts/StackLayout";
import Sidebar from "../../components/Sidebar";

import { useTheme, createUseStyles } from "react-jss";
import styles from "./HomePageContent.styles";

const useStyles = createUseStyles(styles);

const HomePageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <StackLayout>
        <Sidebar />
        <StackLayout className={classes.content} orientation="vertical">
          <h1 className="title">Page index</h1>
        </StackLayout>
      </StackLayout>
    </>
  );
};

export default HomePageContent;
