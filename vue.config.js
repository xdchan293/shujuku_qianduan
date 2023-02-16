const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// module.exports = {
//     publicPath: '/',
//     outputDir: 'dist',
//     assetsDir: 'static',
//     lintOnSave: false,
//     productionSourceMap: false,
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://43.156.3.86:8800', // 配置好的后端接口地址
//                 // 允许跨域
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': '' // 以'/api'开头的url会进行接口转发
//                 }
//             }
//         }
//     },
// }

// module.export = {
//     //代理一个服务器
//     devServer: {
//         proxy: 'http://localhost:3000',
//         //告诉开发服务器将任何位置请求（没有匹配到静态文件的请求，代理到http://localhost:3000。
//         host: '0.0.0.0',
//         port: 8003, //本地
//         open: true,
//         https: false,
//         proxy: null, //string|Object
//     },
//     lintOnSave: false, //关闭esling警告。
//     lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用
//     productionSourceMap: false, //打包不携带map文件

//     //cli3代理多个服务器
//     proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
//         '/api': { //axios访问/api==target+/api 
//             target: 'https://localhost:3000',
//             changeOrigin: true, //创建虚拟服务器
//             ws: true, //websocket代理
//         }，　　
//         '/douban': { // axios 访问 /douban == target + '/douban'
//             　　　　　　 target: 'https://api.douban.com', 　　　　　　changeOrigin: true, 　　　　　　pathRewrite: { //路径替换
//                 　　　　　　　　 '^/douban': '', // axios 访问/douban/v2 == target + /v2
//                 　　　　　　 }　　　　 }　　
//     }
// }