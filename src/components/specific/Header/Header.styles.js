const styles = {
  header: {
    background: (theme) => theme.background.common,
    height: (theme) => theme.headerHeight,
  },
  stack: {
    height: (theme) => theme.headerHeight,
  },
  branding: {
    height: (theme) => theme.headerHeight,
    background: (theme) => theme.background.light,
  },
  navigation: {
    listStyleType: 'none',
  },
  navButton: {
    background: 'none',
    color: (theme) => theme.text.common,
  },
};

export default styles;
