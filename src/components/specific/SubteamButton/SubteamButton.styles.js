const styles = {
  subteam: {
    height: '40px',
    background: (theme) => theme.background.light,
    border: (theme) => `3px solid ${theme.background.light}`,
    padding: '5px',
    color: (theme) => theme.text.common,
  },
  selected: {
    border: (theme) => `2px solid ${theme.text.highlighted}`,
    boxShadow: (theme) => `inset 0 0 2px ${theme.background.shadows}`,
  },
};

export default styles;
