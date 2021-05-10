import React from 'react';

import TaskPageContent from '../../../pagesContent/TaskPageContent';

function TaskPage({
  match: {
    params: { id },
  },
}) {
  return (
    <>
      <TaskPageContent id={id} />
    </>
  );
}

TaskPage.propTypes = {};

TaskPage.wrappers = ['@/wrappers/features/viewTasks'];

export default TaskPage;
