/**
 * 声明这个目录下的文件依赖 vite/client 全局库
 * 不然 不支持less样式模块化
 */
/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv
  }
