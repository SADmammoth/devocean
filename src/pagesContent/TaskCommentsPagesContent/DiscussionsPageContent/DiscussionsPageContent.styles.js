const styles = {
  discussions: {
    height: "85vh",
    marginTop: (theme) => theme.spaces.small,
  },
  messageBoard: {
    flexShrink: 10,
    padding: "5px",
  },
  title: {
    flexShrink: 0,
  },
  formWrapper: {
    flexShrink: 0,
    margin: "10px",
    marginTop: "20px",
  },
  form: {
    "& .form-group": {
      paddingRight: "35px",
      height: "10vh",
    },
    position: "relative",
    width: "100%",
  },
  submitButton: {
    position: "absolute",
    top: "10px",
    right: "5px",
    zIndex: 999,
  },
};

export default styles;
