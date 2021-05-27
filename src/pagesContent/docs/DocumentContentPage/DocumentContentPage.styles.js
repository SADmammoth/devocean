const styles = {
  abstract: {
    background: (theme) => theme.background.light,
    padding: '5px',
    borderRadius: '3px',
  },
  placeholder: {
    color: (theme) => theme.text.saturated,
  },
  blocks: {
    '&>*': {
      width: '80%',
    },
    '& picture': {
      marginBottom: '10px',
      maxWidth: '80%',
    },
    '& p+code, & p+ol, & p+table': {
      marginTop: '-10px',
    },
    '& code': {
      background: (theme) => theme.background.dark,
      borderRadius: '3px',
      padding: '5px',
      paddingLeft: '10px',

      '& .line': {
        counterIncrement: 'line',
        '&::before': {
          content: 'counter(line)',
          fontSize: '0.9rem',
          paddingRight: '20px',
          color: (theme) => theme.text.saturated,
        },
      },
    },
    '& table': {
      marginBottom: '10px',
      '& th': {
        border: (theme) => `2px solid ${theme.text.saturated}`,
        paddingLeft: '10px',
      },
      '& td': {
        border: (theme) => `2px solid ${theme.text.saturated}`,
        paddingLeft: '10px',
      },
    },
  },
};

export default styles;
