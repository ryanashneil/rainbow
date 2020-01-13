const fs = require("fs");
const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const paths = {
  SERVER_BUILD: path.resolve(fs.realpathSync(process.cwd()), "build"),
  TS_CONFIG: path.resolve(
    fs.realpathSync(process.cwd()),
    "server/tsconfig.json"
  )
};

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./server/index.ts",
  output: {
    path: paths.SERVER_BUILD,
    filename: "server.js"
  },
  resolve: {
    extensions: ["webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: paths.TS_CONFIG })]
  },
  node: {
    __dirname: true
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }]
  },
  target: "node",
  externals: nodeModules,
  plugins: [new NodemonPlugin()]
};
