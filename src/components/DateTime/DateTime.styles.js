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
    width: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  time: {
    fontSize: "2.1rem",
    marginBottom: 0,
    padding: 0,
  },

  divider: {
    height: "2px",
    width: "100%",
    margin: 0,
  },

  date: {
    fontSize: "1.1rem",
    marginTop: 0,
    padding: 0,
  },
};

export default styles;
