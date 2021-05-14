const styles = {
  adornment: {
    width: 'auto',
    position: 'relative',

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '8px',
      right: '-13px',
      borderRadius: '50%',
      height: '8px',
      width: '8px',
      background: (theme) => theme.text.highlighted,
    },
  },
};

export default styles;
