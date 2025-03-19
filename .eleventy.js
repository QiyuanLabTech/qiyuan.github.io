module.exports = function (eleventyConfig) {
  // 复制静态资源（CSS、JS）到输出目录
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    // markdownTemplateEngine: "njk", // 如果需要使用 Nunjucks 作为 Markdown 模板引擎，可以取消注释
    templateFormats: ["html", "njk", "md"], // 支持的模板格式
    pathPrefix: "/QiyuanWarehouse/", // 设置路径前缀
    dir: {
      input: "src",    // 输入文件夹
      output: "dist",  // 输出文件夹
      includes: "includes", // 模板文件存放目录
    },
  };
};
