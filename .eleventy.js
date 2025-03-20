// module.exports = function (eleventyConfig) {
//   // 复制静态资源（CSS、JS）到输出目录
//   eleventyConfig.addPassthroughCopy("src/css");
//   eleventyConfig.addPassthroughCopy("src/js");
//   eleventyConfig.addPassthroughCopy("src/images");
//   return {
//     dir: {
//       input: "src",    // 输入文件夹
//       output: "dist",  // 输出文件夹
//       // includes: "_includes", // 模板文件存放目录
//       // layouts: "_layouts" // 布局文件存放目录
//     },
//     passthroughFileCopy: true
//   };
// };
const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // 复制静态资源（CSS、JS、Images）到输出目录
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // 在构建之前删除 dist 目录中的不需要的文件
  eleventyConfig.on('beforeBuild', () => {
    const distDir = path.join(__dirname, 'dist');
    const filesToDelete = ['index.html', 'news/index.html'];

    filesToDelete.forEach(file => {
      const filePath = path.join(distDir, file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
  });

  return {
    dir: {
      input: "src",    // 输入文件夹
      output: "dist",  // 输出文件夹
      // includes: "_includes", // 模板文件存放目录
      // layouts: "_layouts" // 布局文件存放目录
    },
    passthroughFileCopy: true,
    pathPrefix: "/qiyuan.github.io/" // 替换为你的仓库名称
  };
};