module.exports = function (eleventyConfig) {
  // 复制静态资源（CSS、JS）到输出目录
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",    // 输入文件夹
      output: "dist",  // 输出文件夹
      // includes: "_includes", // 模板文件存放目录
      // layouts: "_layouts" // 布局文件存放目录
    },
    passthroughFileCopy: true
  };
};