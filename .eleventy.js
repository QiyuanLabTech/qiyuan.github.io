module.exports = function (eleventyConfig) {
  // 添加 Nunjucks 模板支持
  eleventyConfig.setTemplateFormats([
    "html",
    "njk",
    "md"
  ]);
  // 复制静态资源（CSS、JS）到输出目录
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",    // 输入文件夹
      output: "docs",  // 输出文件夹
      includes: "_includes", // 模板文件存放目录
      // layouts: "_layouts" // 布局文件存放目录
    },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};