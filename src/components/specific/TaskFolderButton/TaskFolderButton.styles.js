const styles = {
  list: {
    height: '40px',
    background: (theme) => theme.background.light,
    border: (theme) => `3px solid ${theme.background.light}`,
    color: (theme) => theme.text.common,
    padding: '5px',
  },
  folder: {
    height: '40px',
    background: (theme) => theme.background.common,
    border: (theme) => `3px solid ${theme.background.common}`,
    color: (theme) => theme.text.common,
    padding: '5px',
  },
  selected: {
    border: (theme) => `2px solid ${theme.text.highlighted}`,
    boxShadow: (theme) => `inset 0 0 2px ${theme.background.shadows}`,
  },
  dropArea: {
    borderRadius: '5px',
  },
};

export default styles;
