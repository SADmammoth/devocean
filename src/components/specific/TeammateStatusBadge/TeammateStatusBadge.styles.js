const styles = {
  actualActive: {
    padding: 0,
    paddingLeft: '15px',
    position: 'relative',
    '&::before': {
      content: "''",
      height: '10px',
      width: '10px',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'lightgreen',
      borderRadius: '100%',
    },
  },

  actualIdle: {
    padding: 0,
    paddingLeft: '15px',
    position: 'relative',
    '&::before': {
      content: "''",
      height: '10px',
      width: '10px',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'lightgray',
      borderRadius: '100%',
    },
  },

  working: {
    padding: 0,
    paddingLeft: '15px',
    position: 'relative',
    '&::before': {
      content: "''",
      height: '10px',
      width: '10px',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'lightgreen',
      borderRadius: '100%',
    },
  },

  notWorking: {
    padding: 0,
    paddingLeft: '15px',
    position: 'relative',
    '&::before': {
      content: "''",
      height: '10px',
      width: '10px',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'lightgray',
      borderRadius: '100%',
    },
  },
};

export default styles;
