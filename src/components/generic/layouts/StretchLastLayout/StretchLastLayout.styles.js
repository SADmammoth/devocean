const styles = {
  normal: {
    '&>*:last-child': {
      flexGrow: 1,
    },
  },

  reversed: {
    '&>*:first-child': {
      flexGrow: 1,
    },
  },

  vertical: {
    height: '100%',
  },
  horizontal: {
    width: '100%',
  },
};

export default styles;
