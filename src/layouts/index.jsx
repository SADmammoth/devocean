import React from "react";

export default function _layout({ children }) {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
}
