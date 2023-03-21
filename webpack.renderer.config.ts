import path from "node:path";
import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

// Css loading
rules.push({
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    { loader: "style-loader" },
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: "postcss-loader",
    },
  ],
});

// Font loading
rules.push({
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: "asset/resource",
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
};
