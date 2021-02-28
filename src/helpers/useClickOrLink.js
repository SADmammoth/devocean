import { useCallback } from "react";
import { history } from "umi";

export default function useClickOrLink(onClick, link) {
  if (!onClick && link) {
    return useCallback(() => {
      history.push(link);
    }, [link]);
  }

  return onClick;
}
