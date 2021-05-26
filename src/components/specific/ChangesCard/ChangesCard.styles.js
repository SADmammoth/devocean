const styles = {
  card: {
    padding: '10px',
  },
  change: {
    '& *': {
      verticalAlign: 'middle',
    },
  },
  text: {
    background: (theme) => theme.background.light,
    padding: '5px',
    paddingLeft: '10px',
  },
  from: {
    background: (theme) => theme.background.dark,
    borderRadius: '3px',
    padding: '0 3px',
  },
  to: {
    background: (theme) => theme.background.dark,
    borderRadius: '3px',
    padding: '0 3px',
  },
  changeArrow: {
    color: (theme) => theme.text.saturated,
  },
  author: {
    marginBottom: '10px',
  },
};

export default styles;
