import _ from 'lodash';

import Duration from '../types/Duration';

export default function () {
  return [
    {
      type: 'text',
      name: 'reportedTime',
      label: 'Reported time',
      validator: (input) => {
        return !_.isNaN(new Duration(input).value);
      },
    },
    {
      type: 'select',
      name: 'activity',
      label: 'Activity',
      valueOptions: [
        {
          label: 'Development',
          value: 'Development',
        },
        {
          label: 'Testing',
          value: 'Testing',
        },
      ],
    },
  ];
}
