const styles = {
  teammateProfileCard: {
    width: '360px',
    border: 'none',
    boxShadow: (theme) => `0 0 4px ${theme.background.shadows}`,
  },
  description: {
    width: '200px',
  },
  // tagName: {
  //   top: '22px',
  //   left: '10px',
  //   position: 'relative',
  //   margin: '0',
  //   padding: '0',
  // },

  tagName: {
    position: 'absolute',
    top: '-10px',
    left: '5px',
    padding: '0 5px',
    zIndex: '99999',
  },
  tag: {
    boxSizing: 'content-box',
    position: 'relative',
  },

  border: {
    '--width': '100px',
    border: (theme) => `2px solid ${theme.text.highlighted}`,
    borderRadius: '3px',
    mask:
      'linear-gradient(90deg, rgba(0,0,0,1) 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) var(--width), rgba(0,0,0,1) var(--width)),' +
      'linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 5px, rgba(0,0,0,1) 5px, rgba(0,0,0,1) 5px)',
  },
};

export default styles;
