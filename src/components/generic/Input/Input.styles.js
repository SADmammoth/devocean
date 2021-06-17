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
  '@global .file_label': {
    height: '280px',
    position: 'relative',
    marginBottom: '20px',
    padding: 'none',
  },
  '@global .file_label caption': {
    display: 'none',
  },
  '@global .file_label .button': {
    position: 'absolute',
    top: '90px',
    left: '95px',
    width: '80px',
    height: '35px',
    textAlign: 'center',
    background: '#8eb4cd',
    color: '#ffffff',
    border: 'none',
    outline: 'none',
    borderRadius: '3px',
  },
  '@global .action-button-wrapper .form-select~button': {
    marginTop: '5px',
    position: 'relative',
    width: '100%',
    zIndex: '1',
    background: '#8eb4cd',
    color: '#ffffff',
    border: 'none',
    outline: 'none',
    borderRadius: '3px',
  },
  '@global .tag-stack': {
    padding: '5px',
  },
  '@global .image': {
    width: '245px !important',
    height: '245px !important',
  },
  '@global .image-file': {
    width: '245px',
    border: 'none',
    padding: 'none',
  },
  '@global .close_button': {
    display: 'none',
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
