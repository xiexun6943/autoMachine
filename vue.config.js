/**
 * @Description:    自定义配置
 * @Author:         txf
 * @CreateDate:     2020/5/7 13:28
 */
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包的目录
    assetsDir: "assets",
    indexPath: "index.html",
    filenameHashing: true,
    lintOnSave: false, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    pages: undefined,
    runtimeCompiler: false,
    transpileDependencies: [],
    crossorigin: undefined,
    integrity: false,
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8087, // 服务端口
        https: false,
        hotOnly: false,
        overlay: {
            warnings: false,
            errors: true
        },
        // 代理重写
        proxy: {
            '/Api': {
                target: 'http://rubikcubexy.club', // target表示代理的服务器url
                /*pathRewrite: { // pathRewrite表示路径重写，key表示一个正则，value表示别名
                    '^/api': '/' // 即用 '/api'表示'http://localhost:3000/api'
                }*/
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "平台";
                return args;
            })
    }
};
