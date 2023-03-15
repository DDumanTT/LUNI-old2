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

// Svg loading
rules.push({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        typescript: true,
        ext: "tsx",
      },
    },
  ],
});

// rules.push({
//   test: /\.svg$/i,
//   type: "asset",
//   resourceQuery: /url/,
// });

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
