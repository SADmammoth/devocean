import { history } from "umi";

export default function useClickOrLink(onClick, link) {
  if (!onClick && link) {
    return () => {
      history.push(link);
    };
  }

  return onClick;
}
