export default function () {
  return [
    {
      id: 'name',
      type: 'text',
      id: 'name',
      name: 'name',
      label: 'Name',
    },
    {
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      label: 'Last name',
    },
    {
      id: 'referAs',
      type: 'select',
      name: 'referAs',
      label: 'Refer to me as',
      valueOptions: [
        {
          label: 'He/him',
          value: 'he',
        },
        {
          label: 'She/her',
          value: 'she',
        },
        // {
        //   label: 'They/them',
        //   value: 'they',
        // },
      ],
    },
    {
      id: 'email',
      type: 'text',
      name: 'email',
      label: 'Email',
      validator: 'email',
    },
  ];
}
