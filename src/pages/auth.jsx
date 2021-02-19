import React, { useEffect, useState } from "react";
import { Redirect } from "umi";

export default function auth(props) {
  const [auth, setAuth] = useState({ noAuth: true });

  useEffect(() => {
    setAuth(sessionStorage.getItem("auth"));
  });

  if (auth) {
    return <>{props.children}</>;
  } else {
    return <Redirect to="/login" />;
  }
}
