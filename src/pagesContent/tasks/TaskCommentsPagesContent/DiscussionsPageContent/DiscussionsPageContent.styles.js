const styles = {
  messageBoard: {
    flexShrink: 10,
    padding: '5px',
    height: '55vh',
  },
  placeholder: {
    background: (theme) => theme.background.common,
    color: (theme) => theme.text.saturated,
  },
  title: {
    flexShrink: 0,
  },
  formWrapper: {
    flexShrink: 0,
    margin: '10px',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    alignItems: 'start',
    padding: '5px',
    borderRadius: '5px',
    '& .form-textarea': {
      height: '8vh',
      marginRight: '5px',
    },
    position: 'relative',
    width: '100%',
    border: (theme) => `2px solid ${theme.text.highlighted}`,
  },
  submitButton: {
    zIndex: 999,
  },
};

export default styles;
