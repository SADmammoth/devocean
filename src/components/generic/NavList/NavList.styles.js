const styles = {
  '@keyframes appear': {
    '100%': {
      opacity: 1,
      filter: 'brightness(1)',
    },
    '0%': {
      opacity: 0.5,
      filter: 'brightness(0.9)',
    },
  },
  container: {
    paddingTop: '1rem',
  },
  list: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: '10px',
  },
  item: {
    border: 'none',
    background: 'none',
    padding: 0,
    margin: 0,
    color: (theme) => theme.text.common,

    fontSize: (theme) => theme.fontSizes.bigger,
  },
  itemContainer: {
    listStyleType: 'none',
    position: 'relative',
    opacity: 0,

    animation: '$appear 0.2s ease-in-out forwards',
    animationDelay: 'calc(var(--index, 0) * 0.2s - 0.1s)',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '8px',
      left: '-13px',
      borderRadius: '50%',
      height: '5px',
      width: '5px',
      background: (theme) => theme.text.common,
    },
  },
};

export default styles;
