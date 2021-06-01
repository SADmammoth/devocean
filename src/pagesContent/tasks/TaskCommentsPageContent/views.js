import {
  FaClock,
  FaCommentAlt,
  FaCommentDots,
  FaComments,
  FaExchangeAlt,
  FaHistory,
  FaPercentage,
  FaRegComment,
  FaRegCommentAlt,
  FaStackExchange,
  FaTasks,
} from 'react-icons/fa';

import MenuItem from '../../../components/generic/MenuItem';

export default [
  {
    link: 'reports',
    label: <MenuItem icon={<FaPercentage />} label={'Time reports'} />,
    id: 'reports',
  },
  {
    link: 'history',
    label: <MenuItem icon={<FaHistory />} label={'History'} />,
    id: 'history',
  },
  {
    link: 'statuses',
    label: <MenuItem icon={<FaTasks />} label={'Status changes'} />,
    id: 'statuses',
  },
  {
    link: 'discussions',
    label: <MenuItem icon={<FaCommentDots />} label={'Discussions'} />,
    id: 'discussions',
  },
];
