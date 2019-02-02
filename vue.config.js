module.exports = {
  devServer: {
    open: true,
    // 让浏览器 overlay 同时显示警告和错误, 不符合eslit规则的代码,将导致编译失败!
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    // 去掉文件名中的 .module
    // [false] --> import styles from './foo.module.css'
    // [true] --> import styles from './foo.css'
    modules: false
  },
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//
  ]
}