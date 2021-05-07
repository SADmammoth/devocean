import React from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";
import StackLayout from "../../generic/layouts/StackLayout";

function FieldChange({ field, from, to }) {
  return (
    <StackLayout orientation="vertical">
      {!field || <div>{field}</div>}
      <StackLayout>
        <div>{from}</div>
        <div>
          <FaChevronRight />
        </div>
        <div>{to}</div>
      </StackLayout>
    </StackLayout>
  );
}

FieldChange.propTypes = {};

export default FieldChange;
