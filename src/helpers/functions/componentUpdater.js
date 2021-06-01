export default function componentUpdater(delay, interval = 60000) {
  let repeater;
  let dateTimeout;

  return {
    start: (updateCallback) => {
      updateCallback();

      dateTimeout = setTimeout(() => {
        updateCallback();
        repeater = setInterval(() => updateCallback(), interval);
      }, delay || interval);
    },

    stop: () => {
      if (repeater != null) {
        clearInterval(repeater);
      }
      if (dateTimeout != null) {
        clearTimeout(dateTimeout);
      }
    },
  };
}
