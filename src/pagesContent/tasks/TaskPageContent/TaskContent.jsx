import React from 'react';

import PropTypes from 'prop-types';

import MarkdownOutput from '../../../components/generic/MarkdownOutput';
import Text from '../../../components/generic/Text';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import CustomFields from './CustomFields';

function TaskContent({ classes, title, customFields }) {
  return (
    <>
      <Text type="h1">{title}</Text>
      <CustomFields classes={classes} customFields={customFields} />
    </>
  );
}

TaskContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TaskContent;
