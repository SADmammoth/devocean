import React from "react";
import Spinner from "../components/generic/Spinner";

export default function StateMonade({ state, children }) {
  console.log(state);
  return <>{state === "hasValue" || state === true ? children : <Spinner />}</>;
}
