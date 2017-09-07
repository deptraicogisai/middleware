module.exports = {
    entry: {
        app: ['babel-polyfill', "./src/index.tsx"]
    },
    output: {
        path: __dirname + "/dist/application",
        publicPath: "/dist/application",
        filename: "[name].js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader?' + JSON.stringify({transpileOnly: true})
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: "#inline-source-map",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};