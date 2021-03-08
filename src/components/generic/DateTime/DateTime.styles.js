const styles = {
  blinking: {
    animation: "$blink 2s infinite ease-in-out 1s",
  },

  "@keyframes blink": {
    from: {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },

  dateTime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  time: {
    marginBottom: 0,
    padding: 0,
  },

  divider: {
    height: "1px",
    width: "100%",
    margin: 0,
    background: (theme) => theme.text.common,
    border: "none",
  },

  date: {
    marginTop: 0,
    padding: 0,
  },

  big: {
    "& $time": {
      fontSize: (theme) => theme.fontSizes.special,
    },
    "& $date": { fontSize: (theme) => theme.fontSizes.bigger },
  },

  small: {
    "& $time": {
      fontSize: (theme) => theme.fontSizes.specialSmall,
    },
    "& $date": { fontSize: (theme) => theme.fontSizes.default },
  },

  mini: {
    "& $time": {
      fontSize: (theme) => theme.fontSizes.bigger,
    },
    "& $date": { fontSize: (theme) => theme.fontSizes.default },
  },
};

export default styles;
