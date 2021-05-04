import React from "react";
import Form from "../../../components/generic/Form";
import PropTypes from "prop-types";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import { FaPaperPlane } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import discussionsState from "../../../recoil/states/discussionsState";
import Button from "../../../components/generic/Button";

function CreateCommentForm({ classes, id }) {
  const addComment = useSetRecoilState(discussionsState(id));

  return (
    <StackLayout
      className={classes.formWrapper}
      orientation="horizontal"
      alignX="start"
    >
      <Form
        className={classes.form}
        inputs={[
          {
            type: "textarea",
            id: "comment",
            name: "comment",
            placeholder: "Type comment",
            label: " ",
            attributes: {
              autoComplete: "off",
            },
          },
        ]}
        onSubmit={async ({ comment }) => {
          addComment({ text: comment, author: "6073019146a48838a00f97c9" });
        }}
        submitButton={
          <Button className={classes.submitButton} size="fluid">
            <FaPaperPlane />
          </Button>
        }
      />
    </StackLayout>
  );
}

CreateCommentForm.propTypes = {};

export default CreateCommentForm;
