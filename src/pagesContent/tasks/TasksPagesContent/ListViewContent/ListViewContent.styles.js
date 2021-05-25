const styles = {
  list: {
    '&>.list-droparea': {
      marginLeft: 'calc(-1 * var(--gap))',
    },
    maxHeight: '73vh',
  },

  folders: {
    width: '100%',
    padding: (theme) => `calc(${theme.fontSizes.biggest} * 1.5) 1rem`,
  },
};

export default styles;
