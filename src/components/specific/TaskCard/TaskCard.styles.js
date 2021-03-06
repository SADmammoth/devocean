const styles = {
  default: {
    '--heightUnit': '88px',
    width: '252px',
    maxWidth: '99%',
    minHeight: 'var(--heightUnit)',
  },
  task: {
    padding: '8px 12px',
    position: 'relative',
  },
  title: {
    width: '80%',
    lineHeight: '1.2',
  },
  status: {
    position: 'absolute',
    right: '10px',
    top: '5px',
  },
  colorTag: {
    height: '100%',
    width: '3px',
    position: 'absolute',
    left: 0,
    top: 0,
    color: 'transparent',
  },
  priority: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '10px',
  },
  progressbar: {
    height: '100%',
    width: '5px',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  reported: { margin: 0 },
  divider: { margin: 0 },
  estimate: { margin: 0 },
  fraction: {
    position: 'absolute',
    right: '10px',
    bottom: 0,
  },
};

export default styles;
