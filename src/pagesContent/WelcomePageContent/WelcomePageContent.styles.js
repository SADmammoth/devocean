const styles = {
  appname: {
    '&>*': { display: 'inline' },
  },
  topPadding: {
    paddingTop: (theme) => theme.spaces.big,
  },
  background: {
    backgroundImage: `url(${require('../../assets/images/loginpage.png')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'auto 90%',
    height: '75%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    right: 0,
    top: 0,
  },
};

export default styles;
