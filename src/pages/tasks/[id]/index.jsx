import React from 'react';

import TaskPageContent from '../../../pagesContent/tasks/TaskPageContent';

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

TaskPage.title = 'tasks.id.title';

export default TaskPage;
