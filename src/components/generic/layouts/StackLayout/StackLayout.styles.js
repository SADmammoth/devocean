import { alignsStyles, alignsStylesForItems } from './helpers.styles';

const styles = {
  stack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--gap, 0)',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },
  horizontal: {
    '&$scroll': {
      overflowX: 'auto',
      overflowY: 'hidden',
    },
  },
  vertical: {
    flexDirection: 'column',
    '&$scroll': {
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  },
  scroll: {
    flexWrap: 'nowrap',
  },
  ...alignsStyles,
  ...alignsStylesForItems,
};

export default styles;
