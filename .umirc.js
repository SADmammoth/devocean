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
    default: 'en-EN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  outputPath: './build',
  define: {
    API_PATH: 'http://localhost:1337',
    SUBSCRIPTION_SERVER: 'http://localhost:1338',
    AUTH_PATH: 'http://localhost:1339',
  },
};
