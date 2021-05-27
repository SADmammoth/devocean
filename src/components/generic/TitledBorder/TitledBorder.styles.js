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
    borderRadius: '3px',

    border: (theme) => `2px solid ${theme.background.border}`,
    mask:
      'linear-gradient(90deg, rgba(0,0,0,1) 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) var(--width), rgba(0,0,0,1) var(--width)),' +
      'linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 5px, rgba(0,0,0,1) 5px, rgba(0,0,0,1) 5px)',
  },

  animated: {
    opacity: 0,
    animation: '$appear 0.1s ease-in-out forwards',
    animationDelay: 'calc(var(--index, 0) * 0.04s + 0.1s)',
  },

  inputBorder: {},

  '@keyframes appear': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

export default styles;
