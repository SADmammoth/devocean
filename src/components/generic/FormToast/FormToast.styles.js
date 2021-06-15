const styles = {
  toast: {
    height: '50px',
    width: '100%',
    background: (theme) => theme.background.error,
    color: (theme) => theme.text.error,
    borderLeft: (theme) => `5px solid ${theme.text.error}`,
    padding: '10px',
    opacity: 1,
    animation: '$appear 0.1s ease-in-out forwards',
  },
  closing: {
    opacity: 0,
    transition: 'all .15s ease-in-out',
  },
  button: {
    border: 'none',
    padding: 0,
    background: 0,
    outline: 'none',
    cursor: 'pointer',
  },
  '@keyframes appear': {
    '0%': {
      transform: 'translateY(100%)',
    },
    '100%': { transform: 'translateX(0)' },
  },
};

export default styles;
