module.exports = {
    devServer: {
        host: 'localhost',
        port: '3000',
        proxy: {
            '/api': {
                target: 'http://10.45.154.200:9023/',//代理地址，代替axios中设置的baseURL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}