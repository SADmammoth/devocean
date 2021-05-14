const styles = {
  button: {
    background: (theme) => theme.background.button,
    border: 0,
    cursor: 'pointer',
  },
  wide: {
    width: '100%',
  },
  common: {
    minWidth: '190px',
    height: '40px',
    fontSize: (theme) => theme.fontSizes.default,
  },
  fluid: {
    padding: '5px 10px',
  },
};

export default styles;
