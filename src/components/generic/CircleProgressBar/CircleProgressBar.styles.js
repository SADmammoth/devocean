import getSectorGradient from "../../../helpers/getSectorGradient";

const styles = {
  progressbar: {
    position: "relative",
    borderRadius: "50%",

    width: (theme) => theme.size,
    height: (theme) => theme.size,

    backgroundColor: (theme) => theme.progressbarForeground,
    backgroundImage: (theme) =>
      getSectorGradient(
        theme.progress,
        theme.progressbarBackground,
        theme.progressbarForeground
      ),

    "&::before": {
      content: '""',
      position: "absolute",
      top: (theme) => theme.width,
      left: (theme) => theme.width,

      width: (theme) => `calc(${theme.size} - (${theme.width} * 2))`,
      height: (theme) => `calc(${theme.size} - (${theme.width} * 2))`,

      borderRadius: "50%",

      backgroundColor: (theme) => theme.progressbarBackdrop,
    },
  },
  content: {
    position: "relative",
    zIndex: "10",
  },
};

export default styles;
