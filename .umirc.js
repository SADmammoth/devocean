export default {
  nodeModulesTransform: {
    type: "none",
  },
  fastRefresh: {},
  devtool: "source-map",
  devServer: {
    writeToDisk: true,
  },
  locale: {
    default: "en-EN",
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: "-",
  },
};
