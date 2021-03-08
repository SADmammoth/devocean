const styles = {
  clock: {
    display: "flex",
    flexDirection: "column",

    margin: "10px 5px",
  },

  cityText: {
    margin: 0,
    textAlign: "center",
    marginBottom: "-10%",
  },

  big: {
    "& $cityText": {
      fontSize: (theme) => theme.fontSizes.default,
    },
  },
  small: {
    "& $cityText": {
      fontSize: (theme) => theme.fontSizes.smaller,
    },
  },
  mini: {
    "& $cityText": {
      display: "none",
    },
  },
};

export default styles;
