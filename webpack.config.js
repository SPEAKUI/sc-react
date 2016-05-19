//entry: './build/index.js',
    /*output: {
     path: 'builds',
     filename: 'testwebpack.js'
     },*/
     
module.exports = {
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    module: {
        loaders: [
            { test: /\.png$/, loader: "url-loader" },
            { test: /\.gif$/, loader: "url-loader" },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015", "stage-1" ]
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015", "react", "stage-1" ],
                    plugins: [ "transform-decorators-legacy", "transform-object-rest-spread" ]
                }
            },
            {
                test: /\.css$/,
                loaders: [ 'style', 'css?module' ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass'
                ]
            }
        ]
    }
};

