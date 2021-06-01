import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import NavItems from '../../../components/generic/NavItems';
import Sidebar from '../../../components/generic/Sidebar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import StretchLayout from '../../../components/generic/layouts/StretchLayout';
import views from './views';

import styles from './TaskCommentsPageContent.styles';

const useStyles = createUseStyles(styles);

function TaskCommentsPageContent({ id, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.sidebar}>
        <StackLayout
          orientation="vertical"
          alignY="start"
          className={classes.commentsSectionsWrapper}>
          <StackLayout orientation="vertical">
            <NavItems
              itemContainerClass={classes.commentsSection}
              itemClass={classes.button}
              activeItemClass={classes.activeSection}
              items={views}
            />
          </StackLayout>
        </StackLayout>
      </Sidebar>
      <Skip column={1} />
      <div className={classes.board} column={6}>
        {children}
      </div>
    </GridLayout>
  );
}

TaskCommentsPageContent.propTypes = {};

export default TaskCommentsPageContent;
