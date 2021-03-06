const styles = {
  content: {
    height: '100%',
  },
  paddingTop: { paddingTop: (theme) => theme.spaces.small },
  marginTop: {
    marginTop: (theme) => theme.spaces.small,
  },
  //   documentBody: {
  //     background: (theme) => theme.background.common,
  //   },
  docForm: {},
  title: {
    '& *': {
      fontSize: (theme) => theme.fontSizes.bigger,
    },
  },
  doc: {
    height: '60vh',
    marginBottom: '20px',
    borderTop: (theme) => `2px solid ${theme.background.button}`,
    marginLeft: '10px',
    paddingTop: '10px',
    '& .cdx-block': {
      fontSize: (theme) => theme.fontSizes.default,
      border: (theme) => `.5px solid ${theme.background.button}`,
      padding: '5px',
      margin: '5px',
    },
    '& .cdx-block:focus': {
      padding: '5px 10px',
      background: (theme) => theme.background.common,
    },
  },
};

export default styles;
