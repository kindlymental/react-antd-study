const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");

module.exports = override(
  // 针对于antd实现按需加载，根据import来打包，使用库：babel-plugin-import
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // 使用less-loader对代码中的less变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  })
);
