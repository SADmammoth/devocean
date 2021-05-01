import React from "react";

import Button from "../../../components/generic/Button";

import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import statusesState from "../../../recoil/states/statusesState";
import Form from "../../../components/generic/Form";

function AddStatusForm({ onSubmit }) {
  const createStatus = useSetRecoilState(statusesState);
  return (
    <Form
      inputs={[
        {
          type: "text",
          id: "status",
          name: "status",
        },
      ]}
      onSubmit={async ({ status }) => {
        createStatus({ name: status, tasks: [] });
        onSubmit();
      }}
    ></Form>
  );
}

AddStatusForm.propTypes = {};

export default AddStatusForm;
