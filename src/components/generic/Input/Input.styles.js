const styles = {
  input: {
    borderRadius: "3px",
    border: 0,
    outline: 0,
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    padding: "2px",
    fontSize: (theme) => theme.fontSizes.default,
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
    fontSize: (theme) => theme.fontSizes.default,
    height: "18vh",
  },

  inputContainer: {
    border: "2px solid black",
    padding: "10px",
    borderRadius: "3px",
  },
};

export default styles;
