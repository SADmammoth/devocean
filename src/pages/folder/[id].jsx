import React from "react";

export default function Cool({ match }) {
  return <div>Cool {match.params.id}</div>;
}
