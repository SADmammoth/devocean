import { FaFolder, FaStickyNote, FaUsers } from 'react-icons/fa';

import Text from '../../components/generic/Text';
import StackLayout from '../../components/generic/layouts/StackLayout';

const views = [
  {
    id: 'list',
    label: (
      <StackLayout gap="5px" alignY="center" alignX="start" nowrap>
        <FaFolder />
        <Text type="common">Lists</Text>
      </StackLayout>
    ),
    link: 'list',
  },
  {
    id: 'kanban',
    label: (
      <StackLayout gap="5px" alignY="center" alignX="start" nowrap>
        <FaStickyNote />
        <Text type="common">Kanban</Text>
      </StackLayout>
    ),
    link: 'kanban',
  },
  {
    id: 'team',
    label: (
      <StackLayout gap="5px" alignY="center" alignX="start" nowrap>
        <FaUsers />
        <Text type="common">Team</Text>
      </StackLayout>
    ),
    link: 'team',
  },
  // {
  //   id: 'events',
  //   title: 'Events',
  //   link: 'events',
  // },
];

export default function getTaskViewMenu(currentView) {
  return views.filter(({ id }) => {
    return id !== currentView;
  });
}
