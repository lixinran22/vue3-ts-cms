const { defineConfig } = require("@vue/cli-service");
// 静态资源的链接，开发模式，用/,生产模式用./
const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "/";
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: BASE_URL,
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
      // extensions: [".js", ".ts", ".vue", ".json"],
    },
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
});
