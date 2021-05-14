import React from 'react';

import EventsViewContent from '../../pagesContent/tasks/TasksPagesContent/EventsViewContent';

function Events() {
  return (
    <>
      <EventsViewContent />
    </>
  );
}

Events.wrappers = ['@/wrappers/hiddenPage', '@/wrappers/features/viewTasks'];

export default Events;
