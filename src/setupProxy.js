const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    console.log(process.env.REACT_APP_API,'ppppppppp')
    app.use(createProxyMiddleware([process.env.REACT_APP_API], {
        target: process.env.REACT_APP_BASE_URL, //配置你要请求的服务器地址
        changeOrigin: true,
        pathRewrite: {
            [`^${process.env.REACT_APP_API}`] : ""
        }
    }))
    // app.use(createProxyMiddleware("/devApi", {
    //     target: "http://www.web-jshtml.cn/api/react", //配置你要请求的服务器地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/devApi": ""
    //     }
    // }))
    // app.use(createProxyMiddleware("/manage/api", {
    //     target: "http://admintext.happymmall.com:7000",
    //     changeOrigin: true
    // }))
}