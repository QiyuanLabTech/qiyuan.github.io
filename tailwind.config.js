/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // 扫描当前目录下的 HTML 文件
    "./src/**/*.{html,js}", // 扫描 src 目录下的 HTML 和 JS 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

