const styles = {
  vertical: {
    '& $value': {
      height: 'var(--progress)',
      top: 'calc(100% - var(--progress))',
    },
  },
  horizontal: {
    '& $value': {
      width: 'var(--progress)',
      right: 'calc(100% - var(--progress))',
    },
  },
  value: {
    background: (theme) => theme.text.highlighted,
    width: '100%',
    position: 'relative',
    color: 'transparent',
  },
  progressbar: {
    background: (theme) => theme.background.dark,
  },
};

export default styles;
