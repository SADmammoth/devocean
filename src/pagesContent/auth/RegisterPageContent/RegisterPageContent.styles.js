const styles = {
  form: {
    marginTop: (theme) => theme.spaces.big,
    '&>*': {
      width: '100%',
    },
    '& button[type=submit]': {
      width: '100%',
    },
  },
  notifications: {
    position: 'relative',
    paddingTop: (theme) => theme.spaces.big,
  },
};

export default styles;
