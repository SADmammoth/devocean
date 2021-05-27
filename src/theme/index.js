const theme = {
  text: {
    common: '#003c58',
    saturated: '#7a878e',
    highlighted: '#005c86',
    button: '#003c58',
  },
  background: {
    shadows: '#c4c4c4',
    dark: '#EAEAEA',
    common: '#F9F9F9',
    light: '#ffffff',
    button: '#c4c4c4',
    border: '#949494',

    card: '#fbfbfb',
  },
  shadows: {
    card: `0 0 4px #e4e4e4`,
  },
  '@global': {
    fontFamily: 'SF Pro Display',
    fontSize: '19px',
  },
  noTypeList: {
    listStyleType: 'none',
  },
  contentWidth: '1400px',
  fontSizes: {
    biggest: '1.79rem', //34px
    bigger: '1.47rem', //28px
    big: '1.36rem', //26px
    default: '1rem', //19px
    small: '0.84rem', //16px
    smaller: '0.74rem', //14px

    special: '4.37rem', //83px
    specialSmall: '2.58rem', //49px
  },
  headerHeight: '7vh',
  spinner: {
    size: '10px',
    background: '#ffffff',
    color: '#005c86',
  },
  spaces: {
    big: '15vh',
    small: '5vh',
  },
  draggableAreaDefaultSize: '50px',
};

export default theme;
