export default function clockUpdater(interval = 60000) {
  let repeater;
  let dateTimeout;

  return {
    start: (updateCallback) => {
      let now = new Date();
      updateCallback(now);
      let delay = interval - now.getSeconds() * 1000 - now.getMilliseconds();

      dateTimeout = setTimeout(() => {
        updateCallback(new Date());
        repeater = setInterval(() => updateCallback(new Date()), interval);
      }, delay);
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
