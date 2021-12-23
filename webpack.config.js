const path = require("path");

module.exports = {
entry: "./src/scripts.js",
output: {
filename: "scripts.js",
path: path.resolve(__dirname, "dist"),
clean: false,
},
mode: 'development',
module: {
rules: [
{
test: /\.css$/i,
use: ["style-loader", "css-loader"],
},
{
test: /\.(png|svg|jpg|jpeg|gif)$/i,
type: "asset/resource",
},
],
},
};