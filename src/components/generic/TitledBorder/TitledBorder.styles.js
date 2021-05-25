const styles = {
  label: {
    position: 'absolute',
    top: '-12px',
    left: '6px',
    padding: '0 5px',
    zIndex: '9999',
  },
  inputContainer: {
    boxSizing: 'content-box',
    position: 'relative',
  },

  border: {
    '--width': '100px',
    height: '100%',
    width: '100%',
    border: (theme) => `2px solid ${theme.text.highlighted}`,
    borderRadius: '3px',
    mask:
      'linear-gradient(90deg, rgba(0,0,0,1) 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) var(--width), rgba(0,0,0,1) var(--width)),' +
      'linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 5px, rgba(0,0,0,1) 5px, rgba(0,0,0,1) 5px)',
  },

  inputBorder: {},
};

export default styles;
