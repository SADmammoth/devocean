import { DateMaskConverters } from '@sadmammoth/react-form';

export default ({
  hideWorkHours,
  setHideWorkHours,
  joinedAt,
  workMode,
  workHours,
  workHoursStart,
  workHoursEnd,
  name,
  lastName,
  referAs,
  shortName,
  avatar,
  subteams,
  tags,
  subteamsValueOptions,
  tagsValueOptions,
  addTagAction,
  addSubteamAction,
}) => [
  {
    id: 'email',
    type: 'text',
    name: 'email',
    label: 'Email',
  },

  {
    id: 'workMode',
    type: 'select',
    name: 'workMode',
    label: 'Work mode',
    valueOptions: [
      {
        label: 'Remote',
        value: 'remote',
      },
      {
        label: 'On-site',
        value: 'onsite',
      },
    ],
    value: workMode,
  },
  {
    id: 'workHours',
    type: 'select',
    name: 'workHours',
    label: 'Work hours',
    valueOptions: [
      {
        label: 'Fixed',
        value: 'fixed',
      },
      {
        label: 'Flexible',
        value: 'flexible',
      },
    ],
    onChange: (name, value) => setHideWorkHours(value === 'flexible'),
    value: workHours,
  },

  {
    id: 'joinedAt',
    name: 'joinedAt',
    type: 'text',
    label: 'Joined at',
    validator: 'dateByCharWithInvisibleMask',
    value: joinedAt || new Date(),
    converters: {
      in: (value) => {
        return DateMaskConverters.fromDateToMask(new Date(value), 'dd-MM-yyyy');
      },
      out: (value) => {
        return DateMaskConverters.parseDateByMask(
          value,
          'dd-MM-yyyy',
        ).toISOString();
      },
    },
  },
  ...(hideWorkHours
    ? []
    : [
        {
          id: 'workHoursStart',
          type: 'text',
          name: 'workHoursStart',
          label: 'Work day start',
          mask: '99:99',
          maskType: 'invisible',
          validator: (input) => Validator.dateTime(input, ['HH:mm']),
          byCharValidator: (input) => Validator.dateByChar(input, ['HH:mm']),
          converters: {
            in: (value) => {
              return value ? new Date(value) : null;
            },
            out: (value) => {
              if (value) {
                const start = new Date(0);
                let date = DateMaskConverters.parseDateByMask(value, 'HH:mm');
                start.setHours(date.getHours(), date.getMinutes());
                return start.getTime();
              }
              return null;
            },
          },

          value: workHoursStart,
        },
        {
          id: 'workHoursEnd',
          type: 'text',
          name: 'workHoursEnd',
          label: 'Work day end',
          mask: '99:99',
          maskType: 'invisible',
          validator: (input) => Validator.dateTime(input, ['HH:mm']),
          byCharValidator: (input) => Validator.dateByChar(input, ['HH:mm']),
          converters: {
            in: (value) => {
              return value ? new Date(value) : null;
            },
            out: (value) => {
              if (value) {
                const start = new Date(0);
                let date = DateMaskConverters.parseDateByMask(value, 'HH:mm');
                start.setHours(date.getHours(), date.getMinutes());
                return start.getTime();
              }
              return null;
            },
          },

          value: workHoursEnd,
        },
      ]),
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
    value: name,
  },
  {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    label: 'Last name',
    value: lastName,
  },
  {
    id: 'referAs',
    name: 'referAs',
    type: 'select',
    label: 'Refer to me as',
    placeholder: 'Press to set...',
    value: referAs,
    valueOptions: [
      {
        label: 'He/him',
        value: 'he',
      },
      {
        label: 'She/her',
        value: 'she',
      },
      {
        label: 'They/them',
        value: 'they',
      },
    ],
  },
  {
    id: 'shortName',
    name: 'shortName',
    type: 'text',
    label: 'Call me',
    value: shortName,
  },
  {
    id: 'avatar',
    name: 'avatar',
    type: 'image',
    label: 'Avatar',
    value: avatar,
  },
  {
    id: 'tags',
    name: 'tags',
    type: 'select-multiple',
    label: 'Subteams',
    value: tags,
    valueOptions: tagsValueOptions,
    actionButton: { label: 'Add new', action: addTagAction },
  },
  {
    id: 'subteams',
    name: 'subteams',
    type: 'select-multiple',
    label: 'Tags',
    value: subteams,
    valueOptions: subteamsValueOptions,
    actionButton: { label: 'Add new', action: addSubteamAction },
  },
];
