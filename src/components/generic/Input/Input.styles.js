const styles = {
  input: {
    borderRadius: '3px',
    border: 0,
    outline: 0,
    width: '100%',
    boxSizing: 'border-box',
    margin: 0,
    padding: '3px',
    fontSize: (theme) => theme.fontSizes.default,
    height: '5vh',
  },

  textarea: {
    width: '100%',
    boxSizing: 'border-box',
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
    fontSize: (theme) => theme.fontSizes.default,
    height: '18vh',
  },

  formControl: {
    zIndex: '2',
    padding: '5px 10px',
  },

  '@global .form-group': {
    position: 'relative',
    marginBottom: '30px',
    width: '100%',
  },
  '@global .show_password-checkbox': {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '999',
    width: '30px',
    height: '20px',
  },
  '@global .show_password-checkbox::before': {
    width: '30px',
    height: '20px',
    textAlign: 'right',
  },
  '@global .select-header': {
    border: '0 !important',
    height: '5vh',
    padding: '0 !important',
  },
};

export default styles;
