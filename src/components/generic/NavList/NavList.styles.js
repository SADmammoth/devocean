const styles = {
  container: {
    paddingTop: "1rem",
  },
  list: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: "10px",
  },
  item: {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,

    fontSize: (theme) => theme.fontSizes.bigger,
  },
  itemContainer: {
    listStyleType: "none",
    position: "relative",

    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: "8px",
      left: "-13px",
      borderRadius: "50%",
      height: "5px",
      width: "5px",
      background: (theme) => theme.text.common,
    },
  },
};

export default styles;
