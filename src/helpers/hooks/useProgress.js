import { useMemo } from 'react';

export default function useProgress(reportedTime, estimate) {
  const progress = useMemo(() => {
    if (_.isNaN(estimate.value) || !estimate.value) return 1;
    return reportedTime.getTime() / estimate.getTime();
  }, [reportedTime, estimate]);
  return progress;
}
