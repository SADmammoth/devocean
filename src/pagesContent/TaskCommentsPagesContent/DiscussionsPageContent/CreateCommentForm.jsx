import React from "react";
import Form from "../../../components/generic/Form";
import PropTypes from "prop-types";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import { FaPaperPlane } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import discussionsState from "../../../recoil/states/discussionsState";

function CreateCommentForm({ id }) {
  const addComment = useSetRecoilState(discussionsState(id));

  return (
    <StackLayout orientation="horizontal" alignX="start">
      <Form
        inputs={[
          {
            type: "text",
            id: "comment",
            name: "comment",
            placeholder: "Type comment",
          },
        ]}
        onSubmit={async ({ comment }) => {
          addComment({ text: comment, author: "6073019146a48838a00f97c9" });
        }}
        submitText={<FaPaperPlane />}
      />
    </StackLayout>
  );
}

CreateCommentForm.propTypes = {};

export default CreateCommentForm;
