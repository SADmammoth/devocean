import React from "react";
import StackLayout from "../../components/generic/layouts/StackLayout";
import MarkdownOutput from "../../components/generic/MarkdownOutput";
import Text from "../../components/generic/Text";

export default function TaskContent({ classes, fullTask }) {
  const { title, description } = fullTask;
  console.log(fullTask);
  return (
    <StackLayout>
      <Text type="h1">{title}</Text>
      <MarkdownOutput name="description">{description || ""}</MarkdownOutput>
    </StackLayout>
  );
}
