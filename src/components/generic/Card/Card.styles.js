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
  cardWrapper: {
    display: 'flex',
    padding: '2px',
  },
  card: {
    boxShadow: (theme) => theme.shadows.card,
    background: (theme) => theme.background.card,
    borderRadius: '3px',
    opacity: 0,

    animation: '$appear 0.1s ease-in-out forwards',
    animationDelay: 'calc(var(--index, 0) * 0.04s + 0.1s)',
  },
};

export default styles;
