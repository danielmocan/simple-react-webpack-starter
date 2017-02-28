module.exports ={
    entry: "./src/app.js",

    output: {
        filename: "./bundle.js"
    },

    devServer: {
        inline: true,
        port: 2020
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}
