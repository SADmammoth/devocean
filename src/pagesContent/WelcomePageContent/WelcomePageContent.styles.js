const styles = {
  appname: {
    '&>*': { display: 'inline' },
  },
  topPadding: {
    paddingTop: (theme) => theme.spaces.big,
  },
  background: {
    backgroundImage: `url(${require('../../assets/images/ship.gif')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    right: 0,
    top: 0,
  },
};

export default styles;
