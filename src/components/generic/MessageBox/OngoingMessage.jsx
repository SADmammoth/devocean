import React from "react";
import PropTypes from "prop-types";
import StackLayout from "../layouts/StackLayout";

function OngoingMessage({ className, children }) {
  return (
    <StackLayout alignX="end">
      <div className={className}>{children}</div>
    </StackLayout>
  );
}

OngoingMessage.propTypes = {};

export default OngoingMessage;
