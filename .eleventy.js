module.exports = function (eleventyConfig) {
    // 复制静态资源（CSS、JS）到输出目录
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
  
    return {
      passthroughFileCpoy:true,
      markdownTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      pathPrefix: "/QiyuanWarehouse/", // 设置路径前缀
      dir: {
        input: "./src",    // 输入文件夹
        output: "./dist",  // 输出文件夹
        includes: "includes",
      },
    };
  };