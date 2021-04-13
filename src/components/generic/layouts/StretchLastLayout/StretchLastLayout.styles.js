const styles = {
  normal: {
    "&>*:last-child": {
      flexGrow: 1,
    },
  },

  reversed: {
    "&>*:first-child": {
      flexGrow: 1,
    },
  },
};

export default styles;
