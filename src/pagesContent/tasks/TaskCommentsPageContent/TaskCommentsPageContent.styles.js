const styles = {
  content: {
    height: '100%',
  },
  sidebar: {
    height: '100%',
  },
  board: {
    maxHeight: '100%',
  },
  commentsSectionsWrapper: {
    height: '100%',
    paddingTop: (theme) => theme.spaces.small,
  },
  commentsSection: {
    listStyleType: 'none',
  },
  button: {
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    fontSize: (theme) => theme.fontSizes.default,
    fontWeight: 'bold',
    outline: 'none',
    border: 'none',
    background: (theme) => theme.background.light,
    margin: '2px 0',
    '&$active': {
      border: (theme) => `2px solid ${theme.text.highlighted}`,
    },
    cursor: 'pointer',
  },
};

export default styles;
