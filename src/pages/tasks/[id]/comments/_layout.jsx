import React from 'react';

import PropTypes from 'prop-types';

import TaskCommentsPageContent from '../../../../pagesContent/tasks/TaskCommentsPageContent';

function TaskCommentsPage({
  match: {
    params: { id },
  },
  children,
}) {
  return (
    <>
      <TaskCommentsPageContent id={id}>{children}</TaskCommentsPageContent>{' '}
    </>
  );
}

TaskCommentsPage.propTypes = {};

TaskCommentsPage.wrappers = ['@/wrappers/features/viewTasks'];

export default TaskCommentsPage;
