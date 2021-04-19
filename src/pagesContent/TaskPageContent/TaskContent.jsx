import React from "react";
import PropTypes from "prop-types";
import StackLayout from "../../components/generic/layouts/StackLayout";
import MarkdownOutput from "../../components/generic/MarkdownOutput";
import Text from "../../components/generic/Text";

function TaskContent({ classes, title, description }) {
  return (
    <StackLayout>
      <Text type="h1">{title}</Text>
      <MarkdownOutput name="description">{description || ""}</MarkdownOutput>
    </StackLayout>
  );
}

TaskContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TaskContent;
