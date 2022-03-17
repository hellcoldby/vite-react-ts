# vite + react + ts

-   本项目基于 vite + react + ts
-   增加 react-router、 redux 、react-redux 、react-saga 

## 状态管理 store

-   参考 dva-core ,移植了主要的状态管理逻辑， 可以在./src/store/models 文件下创建状态管理文件
    - 支持 namespace、state、effect、reducers
    - 还未增加 subscriptions 功能

```js
const test2 = {
    namespace: 'test2',
    state: {
        name: 'hello world',
    }, // 初始值

    effects: {
        *fetch(action: actionType, { put }) {
            yield put({ type: 'test2/changeName', payload: { name: 'hahahha' } });
        },
    },

    reducers: {
        changeName: function (state: stateType, action: actionType) {
            return {
                ...state,
                name: action.payload?.name,
            };
        },
    },
};
```

##less 模块化

-   注意``` ./src/vite-env.d.ts ```这个文件 会保证样式模块化
-   样式文件增加 module 关键字,vite 识别我模块化
    -   `index.less ----> .index.module.less `

```js
   // vite.config.ts 增加配置
     css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, //开启less 可函数功能
            },
        },
    },
```
## TS描述文件
- 在根目录 types 文件夹，里边是第三方模块的描述文件。因为某些第三方模块，比提供@types/xxx 的安装包，
虽然内置的ts 描述文件 ，但需要手动引入。
- 在```tsconfig.json ``` 文件中配置增加了``` ···"include": ["src", "types"]``` 指定了描述文件加载的位置

## 目录结构

```js
.
├── dist/                          // 默认的 build 输出目录
└── src/
    ├── assets                     // 静态资源
    ├── components                 // 组件
    ├── router                     // 路由配置
    ├── store                      // 状态管理
        ├── models/                 // reducer文件
        ├── utils/                   // dva-core 状态管理移植
    ├── pages/                     // 路由组件
        ├── Editor/                 // 编辑面板
        ├── Home/                   // 首页
    ├── services                   // 全局请求
    ├── utils                      // 工具函数
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── package.json
├── .gitignore                      // git要忽略的文件

```

# package.json 插件说明

```json

"@types/node": "^17.0.21",--- ts 描述
"@types/react": "^17.0.33",--- ts 描述
"@types/react-dom": "^17.0.10", --- ts 描述
"@types/react-redux": "^7.1.23",  --- ts 描述
"@vitejs/plugin-react": "^1.0.7", --- vite 支持 react 插件
```

# eslint 支持

- eslint-plugin-promise插件
让开发者养成较好地使用promise的方式




# vite 配置说明

-   [情景配置](https://vitejs.cn/config/#config-intellisense)
    -   官方说明，用一个函数来获取当前环境（开发 或 打包）

```js
export default defineConfig(({ command, mode }) => {
    if (command === 'serve') {
        return {
            // dev 独有配置
        };
    } else {
        // command === 'build'
        return {
            // build 独有配置
        };
    }
});
```

-   全局环境变量配置
    -   在根目录 创建.env.development 文件。
    ```js
        # 开发环境变量
        VITE_APP_TITLE='development'
        VITE_API_URL = 'http://000.000.000.00:0000/'
    ```
    -   在其他文件加下获取环境变量
    ```js
    import.meta.env.VITE_APP_TITLE === 'development';
    ```
