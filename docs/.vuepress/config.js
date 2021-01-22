module.exports = {
  theme: "antdocs",
  title: "Cloudreve Apidoc",
  description: "Cloudreve 的非官方 API 文档",
  base: "/",
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "上次更新",
    editLinks: false,
  },
};
