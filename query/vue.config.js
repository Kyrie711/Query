module.exports = {
  outputDir: 'dist', //build输出⽬录
  assetsDir: 'assets', //静态资源⽬录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否⾃动弹出浏览器⻚⾯
    port: '8081',
    https: false, //是否使⽤https协议
    hotOnly: false, //是否开启热更新
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'The federated query';
        return args
      })
  },
  publicPath:"./"
}
 