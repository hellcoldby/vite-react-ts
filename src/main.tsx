import React from "react";
import ReactDOM from "react-dom";
import "./assets/global.css"; //引入全局样式
import RouterConfig from "./router/index"; //引入路由配置

ReactDOM.render(
    <React.StrictMode>
        <RouterConfig />
    </React.StrictMode>,
    document.getElementById("root")
);
