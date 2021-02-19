import React from "react";

function Another(props) {
  return (
    <div>
      Hi
      <button onClick={() => props.history.push("/")}>Go back</button>
    </div>
  );
}

Another.wrappers = ["auth"];

export default Another;
