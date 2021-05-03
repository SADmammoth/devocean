const styles = {
  message: {
    width: "100px",
    padding: "10px",
    margin: "5px 0",
    position: "relative",
    "&::before": {
      content: "''",
      height: "10px",
      width: "10px",
      display: "block",
      position: "absolute",
      bottom: "-10px",
    },
  },
  incoming: {
    background: (theme) => theme.background.common,
    "&::before": {
      left: "0",
      background: (theme) =>
        `linear-gradient(135deg, ${theme.background.common} 0%, ${theme.background.common} 50%, transparent 50%, transparent 100%)`,
    },
  },
  ongoing: {
    background: (theme) => theme.background.dark,
    "&::before": {
      right: "0",
      background: (theme) =>
        `linear-gradient(225deg, ${theme.background.dark} 0%, ${theme.background.dark} 50%, transparent 50%, transparent 100%)`,
    },
  },
};

export default styles;
