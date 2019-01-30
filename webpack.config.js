const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CheckerPlugin } = require('awesome-typescript-loader')
const BrowserConfig = {
    name : 'browser',
    entry: './src/client/index.js',
      output: {
        path: path.resolve(__dirname),
        filename: './public/js/app.bundle.js',
        publicPath: '/'

      },
      resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
    target : 'web',
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                 loader: 'awesome-typescript-loader'

              },
              {
                test: /\.ts$/,
                exclude: /node_modules/,
                 loader: 'awesome-typescript-loader'
              },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
        ]

    },
    devServer: {
        historyApiFallback: true,
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
          __isBrowser__: "true",
        }),
        new CheckerPlugin()
      ]
};

const ServerConfig = {
    name : 'server',
    entry: './src/server/index.ts',
    output: {
          path: path.resolve(__dirname),
          filename: './server.js',
          libraryTarget: "commonjs2",
          publicPath: '/'
      },
      node: {
          __dirname: false
      },
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
       new webpack.DefinePlugin({
        __isBrowser__: "false",
       })
     ],
     resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
              },
              {
                test: /\.ts|\.tsx$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader',
                include: __dirname
              },
        ]
    },
    devServer: {
      historyApiFallback: true,
    }
};

module.exports =[ BrowserConfig ,ServerConfig ];
// module.exports =[ BrowserConfig ];