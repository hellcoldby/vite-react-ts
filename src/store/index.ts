import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { effects_list } from './utils/parse_file';
import reducer from './utils/get_reducers';
import sagas from './utils/get_saga';
import createPromiseMiddleware from './utils/createPromiseMiddleware';

const promiseMiddleware = createPromiseMiddleware(effects_list);
const sagaMiddleware = createSagaMiddleware(/* {sagaMonitor} */);

let store: Store;
if (import.meta.env.VITE_APP_TITLE === 'development') {
    //开发环境，增加浏览器插件redux-devtool 监控
    const composeEnhancers =
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;
    store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware, sagaMiddleware)));
} else {
    //生产环境
    store = createStore(reducer, applyMiddleware(promiseMiddleware, sagaMiddleware));
}

sagas.forEach((mySaga) => {
    sagaMiddleware.run(mySaga);
});
export default store;
