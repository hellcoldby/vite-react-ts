import { ConfigEnv, UserConfigExport, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import monacoEditorPlugin from "vite-plugin-monaco-editor"
//公共配置
const commonConfig = {
    plugins: [
        eslintPlugin(), 
        react(),
        monacoEditorPlugin()
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            '@': resolve(__dirname, './src'),
            //路由页面
            '@pages': resolve(__dirname, './src/pages'),
            //store 状态管理
            '@store': resolve(__dirname, './src/store'),
            // 自定义 Hook
            '@commonHook': resolve(__dirname, './src/commonHook'),
            // 组件
            '@components': resolve(__dirname, './src/components'),

            // 工具类
            '@utils': resolve(__dirname, './src/utils'),
            // 请求封装
            '@services': resolve(__dirname, './src/services'),
            // request
            '@http': resolve(__dirname, './src/services/request.js'),
            // 静态资源
            '@assets': resolve(__dirname, './src/assets'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, //开启less 可函数功能
            },
        },
    },
};

//开发环境配置
const devConfig = {
    ...commonConfig,
    server: {
        // proxy: {
        //     '/api': {
        //         target: 'https://test-raycharts.raykite.com/',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, ''),
        //     },
        // },
    },
};

//生产环境配置
const buildConfig = {
    ...commonConfig,
};

export default defineConfig(({ command, mode }: ConfigEnv) => {
    if (command === 'serve') {
        //开发环境
        return devConfig;
    } else {
        //生产环境 command === 'build'
        return buildConfig;
    }
});
