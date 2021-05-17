import React from 'react';

import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';

import Button from '../../../../components/generic/Button';
import Form from '../../../../components/generic/Form';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import discussionsState from '../../../../recoil/states/discussionsState';

function CreateCommentForm({ classes, id }) {
  const addComment = useSetRecoilState(discussionsState(id));

  return (
    <StackLayout
      className={classes.formWrapper}
      orientation="horizontal"
      alignX="start">
      <Form
        className={classes.form}
        inputs={[
          {
            type: 'textarea',
            id: 'comment',
            name: 'comment',
            placeholder: 'Type comment',
            label: ' ',
            attributes: {
              autoComplete: 'off',
            },
          },
        ]}
        onSubmit={async ({ comment }) => {
          addComment({
            text: comment,
          });
        }}
        submitButton={
          <Button className={classes.submitButton} size="fluid">
            <FaPaperPlane />
          </Button>
        }
        resetOnSubmit
      />
    </StackLayout>
  );
}

CreateCommentForm.propTypes = {};

export default CreateCommentForm;
