import React, { useEffect } from "react";

export default function login(props) {
  useEffect(() => {
    sessionStorage.setItem("auth", "a");
  }, []);

  return (
    <div>
      <p>Authenticated</p>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  );
}
