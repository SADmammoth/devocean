import componentUpdater from '../../../helpers/functions/componentUpdater';

export default function clockUpdater() {
  let updater;
  const interval = 60000;

  return {
    start: (updateCallback) => {
      let now = new Date();
      const delay = interval - now.getSeconds() * 1000 - now.getMilliseconds();
      updater = componentUpdater(delay);

      updater.start(() => updateCallback(new Date()));
    },

    stop: () => {
      updater.stop();
    },
  };
}
