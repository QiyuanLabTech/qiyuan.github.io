// 添加 Markdown 插件支持
// const markdownIt = require("markdown-it");
// const path = require("path");
const markdownIt = require("markdown-it");
module.exports = function (eleventyConfig) {
   // 配置Markdown
   let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
  // 创建论文集合
  eleventyConfig.addCollection("papers", function(collection) {
    return collection.getFilteredByGlob("src/papers/*.md");
  });

  // 资源复制
  ["css", "js", "images", "_includes"].forEach(dir => {
    eleventyConfig.addPassthroughCopy(`src/${dir}`);
  });
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
    // pathPrefix: "/",
    templateFormats: ["html", "njk","md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};