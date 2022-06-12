module.exports = {
  outputDir: 'dist', //build输出⽬录
  assetsDir: 'assets', //静态资源⽬录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否⾃动弹出浏览器⻚⾯
    port: '8081',
    https: false, //是否使⽤https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/api': {
        // target: 'http://192.168.43.27:8091', //API服务器的地址
        target: 'http://localhost:9000', //写死
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 重写路径，因为后端没有/api，所以在识别的时候会把/api替换成''
        }
      }
      // '/query': 'http://localhost:8091'
    },
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
 