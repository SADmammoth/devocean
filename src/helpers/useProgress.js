import { useMemo } from "react";

export default function useProgress(reportedTime, estimate) {
  const progress = useMemo(() => {
    return reportedTime.getTime() / estimate.getTime();
  }, [reportedTime, estimate]);
  return progress;
}
