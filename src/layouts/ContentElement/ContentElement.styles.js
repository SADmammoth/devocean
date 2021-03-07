const styles = {
  main: {
    top: (theme) => theme.headerHeight,
    position: "absolute",
    width: "100vw",
    height: (theme) => `calc(100vh - ${theme.headerHeight})`,
  },
  content: {
    height: "100%",
  },
};

export default styles;
