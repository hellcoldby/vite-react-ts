/**
 * 路由配置
 */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Editor from "@pages/Editor";
import Home from "@pages/Home";
import { Provider } from "react-redux"; //状态注入全局
import store from "../store"; //引入状态管理

export default function RouterConfig() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                      <Route path="home" element={<Home />} />
                      <Route path="editor" element={<Editor />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

/** ---------  useRoutes 对象类型的写法-----------
// The useRoutes() hook allows you to define your routes as JavaScript objects
//  instead of <Routes> and <Route> elements.

export default function RouterConfig() {
   let routers: RouteObject[] = [
     {
       path: "/",
       element: <App />,
       // children: [  //子组件导航配置
       //   {
       //     path: "/con",
       //     element: <Con/>,
       //   },
       // ],
     },
     {
       path: "/editor",
       element: <Editor/>,
     }
   ]
   let element = useRoutes(routers);
   
   return  element;
  }
  
------------------------*/
