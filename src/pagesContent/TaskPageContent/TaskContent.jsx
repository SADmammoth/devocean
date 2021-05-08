import React from "react";

import CustomFields from "./CustomFields";

import PropTypes from "prop-types";
import StackLayout from "../../components/generic/layouts/StackLayout";
import MarkdownOutput from "../../components/generic/MarkdownOutput";
import Text from "../../components/generic/Text";

function TaskContent({ classes, title, customFields }) {
  return (
    <>
      <Text type="h1">{title}</Text>
      <CustomFields customFields={customFields} />
    </>
  );
}

TaskContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TaskContent;
