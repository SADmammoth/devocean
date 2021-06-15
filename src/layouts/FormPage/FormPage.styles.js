const styles = {
  content: {
    height: '100%',
  },
  marginTop: {
    marginTop: (theme) => theme.spaces.small,
  },
  paddingTop: {
    paddingTop: (theme) => theme.spaces.small,
  },
  icon: {
    fontSize: (theme) => theme.fontSizes.bigger,
  },
  sidebar: {
    paddingTop: (theme) => `calc(${theme.spaces.small} * 3 - 5px)`,
  },
  scrollArea: {
    padding: '10px',
    paddingTop: '15px',
  },
  notifications: {
    position: 'relative',
    paddingTop: (theme) => `calc(${theme.spaces.small} * 3 - 5px)`,
  },
};

export default styles;
