const styles = {
  list: {
    height: "40px",
    background: (theme) => theme.background.light,
    border: (theme) => `3px solid ${theme.background.light}`,
    padding: "5px",
  },
  selected: {
    boxShadow: (theme) => `inset 0 0 2px ${theme.background.shadows}`,
  },
  folder: {
    height: "40px",
    background: (theme) => theme.background.common,
    border: (theme) => `3px solid ${theme.background.common}`,
    padding: "5px",
  },
  folderTree: {
    marginRight: "5px",
  },
  selectedTree: {},
};

export default styles;
