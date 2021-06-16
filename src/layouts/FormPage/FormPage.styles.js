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
    paddingRight: '20px',
    paddingTop: '15px',
    height: '55vh',
  },
  notifications: {
    position: 'relative',
    paddingTop: (theme) => `calc(${theme.spaces.small} * 3 - 5px)`,
  },
};

export default styles;
