const styles = {
  scrollArea: {
    marginRight: '-8px',
    flexWrap: 'nowrap',

    '&>*': {
      scrollSnapAlign: (theme) => theme.blockSnapType,
    },

    scrollPaddingBlockStart: (theme) => theme.scrollPaddingStart,
    scrollPaddingBlockEnd: (theme) => theme.scrollPaddingEnd,
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: (theme) => theme.background.button,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: (theme) => theme.background.dark,
    },
  },
  horizontalScroll: {
    overflowX: 'auto',
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    scrollSnapType: 'x mandatory',
  },
  verticalScroll: {
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    scrollSnapType: 'y mandatory',
  },
};

export default styles;
