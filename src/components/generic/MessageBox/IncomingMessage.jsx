import React from "react";
import PropTypes from "prop-types";
import StackLayout from "../layouts/StackLayout";

function IncomingMessage({ className, children }) {
  return (
    <StackLayout alignX="start">
      <div className={className}>{children}</div>
    </StackLayout>
  );
}

IncomingMessage.propTypes = {};

export default IncomingMessage;
