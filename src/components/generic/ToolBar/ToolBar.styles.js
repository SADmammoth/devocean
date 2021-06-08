const styles = {
  toolbar: {
    background: (theme) => theme.background.common,
    paddingTop: '3rem',
    marginLeft: '2rem',
  },
  list: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
  },
  itemContainer: {
    listStyleType: 'none',
    width: '100%',
  },
  item: {
    background: 'none !important',
    color: (theme) => theme.text.common,
    border: 'none',
    margin: 0,
    padding: '10px',
    width: '100%',
    borderBottom: (theme) => `2px solid ${theme.background.dark}`,
  },
};

export default styles;
