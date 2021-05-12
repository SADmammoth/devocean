import React from 'react';

import EventsViewContent from '../../pagesContent/TasksPagesContent/EventsViewContent';

function Events() {
  return (
    <>
      <EventsViewContent />
    </>
  );
}

Events.wrappers = [
  '@/wrappers/features/hiddenPage',
  '@/wrappers/features/viewTasks',
];

export default Events;
