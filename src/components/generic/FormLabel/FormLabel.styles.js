const styles = {
  label: {
    position: "absolute",
    top: "-12px",
    left: "8px",
    padding: "0 5px",
    zIndex: "99999",
  },
  inputContainer: {
    height: "calc(100% + 15px)",
    width: "calc(100% + 15px)",
    boxSizing: "content-box",
    position: "absolute",
    left: "-7px",
    top: "-7px",
  },

  border: {
    "--width": "100px",
    height: "100%",
    width: "100%",
    border: (theme) => `2px solid ${theme.background.button}`,
    borderRadius: "3px",
    mask:
      "linear-gradient(90deg, rgba(0,0,0,1) 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) var(--width), rgba(0,0,0,1) var(--width))," +
      "linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 20px, rgba(0,0,0,1) 20px)",
  },

  inputBorder: {},
};

export default styles;
