const styles = {
  default: {
    "--heightUnit": "88px",
    width: "258px",
    minHeight: "var(--heightUnit)",
  },
  task: {
    boxShadow: (theme) =>
      `2px 2px 4px ${theme.background.common}, 0px 0px 2px ${theme.background.dark}`,
    padding: "5px 10px",
    border: (theme) => `1px solid ${theme.background.common}`,
    borderRadius: "2px",
    background: (theme) => theme.background.card,
    position: "relative",
  },
  title: {
    width: "85%",
    lineHeight: "1.2",
  },
  status: {
    position: "absolute",
    right: "10px",
    top: "5px",
  },
  colorTag: {
    height: "100%",
    width: "2px",
    position: "absolute",
    left: 0,
    top: 0,
    color: "transparent",
  },
  priority: {
    position: "absolute",
    bottom: 0,
    marginBottom: "10px",
  },
  progressbar: {
    height: "100%",
    width: "5px",
    position: "absolute",
    right: 0,
    top: 0,
  },
  reported: { margin: 0 },
  divider: { margin: 0 },
  estimate: { margin: 0 },
  fraction: {
    position: "absolute",
    right: "10px",
    bottom: 0,
  },
};

export default styles;
