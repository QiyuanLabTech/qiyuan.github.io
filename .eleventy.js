// 添加 Markdown 插件支持
// const markdownIt = require("markdown-it");
// const path = require("path");
module.exports = function (eleventyConfig) {
  //   // 配置 Markdown 处理器
  // let markdownLibrary = markdownIt({
  //   html: true,
  //   breaks: true,
  //   linkify: true
  // });
  // eleventyConfig.setLibrary("md", markdownLibrary);
  // // 专门配置posts目录的Markdown处理
  // eleventyConfig.addCollection("posts", function(collection) {
  //   return collection.getFilteredByGlob("src/posts/*.md");
  // });
   // 配置日期过滤器
  //  eleventyConfig.addFilter("date", function(date, format) {
  //   return format ? moment(date).format(format) : moment(date).format('YYYY-MM-DD');
  // });
  // 复制静态资源（CSS、JS）到输出目录
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  // 复制 _includes 文件夹到输出目录
  eleventyConfig.addPassthroughCopy("src/_includes");
  
  return {
    dir: {
      input: "src",    // 输入文件夹
      output: "docs",  // 输出文件夹
      includes: "_includes", // 模板文件存放目录
    },
    templateFormats: ["html", "njk","md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // dataTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};