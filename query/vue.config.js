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
        target: 'http://172.16.6.158:8091', //API服务器的地址
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
        args[0].title= '联邦查询';
        return args
      })
  },
}
 