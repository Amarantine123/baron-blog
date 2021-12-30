const path = require('path');
const {
    //baseURL,
    publicPath,
    // assetsDir,
    outputDir,
    // lintOnSave,
    // transpileDependencies,
    // title,
    abbreviation,
    devPort,
    providePlugin,
    build7z,
    // donation,
} = require('./src/shared/configurations')
const resolve = (dir) => {
    return path.join(__dirname, dir);
}

const Webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['html', 'js', 'css', 'svg'];
const dayjs = require('dayjs');
const date = dayjs().format('YYY_M_D');

module.exports = {
    publicPath,
    devServer: {
        hot: true,
        port: devPort,
        noInfo: false,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '^/V1': {
                target: `http://localhost:5002`,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/V1': ''
                }
            },
        }
    },
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@': resolve('src'),
                    '*': resolve(''),
                },
            },
            plugins: [
                new Webpack.ProvidePlugin(providePlugin)
            ]
        }
    },
    chainWebpack(config) {
        // const svgRule = config.module.rule('svg');
        // svgRule.uses.clear();
        // config.resolve.symlinks(true);
        // svgRule.use('vue-svg-loader').loader('vue-svg-loader');
        config.module.rule('svg').exclude.add(resolve('src/icon/remixIcon')).end()
        config.module
            .rule('remixIcon')
            .test(/\.svg$/)
            .include.add(resolve('src/icon/remixIcon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'remix-icon-[name]' })
            .end()
        config.when(process.env.NODE_ENV === 'development', (config) => {
            config.devtool('source-map')
        })
        config.when(process.env.NODE_ENV !== 'development', (config) => {
            config.performance.set('hints', false)
            config.devtool('none')
            config
                .plugin('compression')
                .use(CompressionWebpackPlugin, [{
                    filename: '[path][base].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 8192,
                    minRatio: 0.8,
                }, ])
                .end()
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    bypassOnDebug: true,
                })
                .end()
            if (build7z) {
                config.when(process.env.NODE_ENV === 'production', (config) => {
                    config
                        .plugin('fileManager')
                        .use(FileManagerPlugin, [{
                            onEnd: {
                                delete: [`./${outputDir}/video`, `./${outputDir}/data`],
                                archive: [{
                                    source: `./${outputDir}`,
                                    destination: `./${outputDir}/${abbreviation}_${outputDir}_${date}.7z`,
                                }, ],
                            },
                        }, ])
                        .end()
                })
            }

        })
    },
    runtimeCompiler: true,
    productionSourceMap: false,
    css: {
        requireModuleExtension: true,
        sourceMap: true,
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                },
            },
        },
    },
}