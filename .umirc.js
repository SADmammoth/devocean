export default {
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
  },
  locale: {
    default: 'en-US',
    antd: false,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  outputPath: './build',
  define: {
    API_PATH: 'http://devocean-back.herokuapp.com',
    SUBSCRIPTION_SERVER: 'http://devocean-comm.herokuapp.com',
    AUTH_PATH: 'http://devocean-users.herokuapp.com',
  },
  favicon: '/favicon.svg',
};
