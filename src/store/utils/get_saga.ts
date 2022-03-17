/**
 * 遍历saga (effects_list)列表
 *
 */
import { effects_list } from './parse_file';
import { put, take, takeEvery, select, call, fork, cancel } from 'redux-saga/effects';
import { Saga, Buffer, Channel, END as EndType, Predicate, SagaIterator, Task } from '@redux-saga/types';

const sagas: Array<Saga> = [];
for (const item in effects_list) {
    const cur_namespace = item;
    const cur_effects = effects_list[cur_namespace];

    sagas.push(function* () {
        for (const key in cur_effects) {
            const cur_method = cur_effects[key];
            const watcher = getWatcher(cur_namespace, key, cur_method);
            const task: any = yield fork(watcher);
            yield fork(function* () {
                yield take(`${cur_namespace}/@@CANCEL_EFFECTS`);
                yield cancel(task);
            });
        }
    });
}

function getWatcher(cur_namespace: string, method_name: string, cur_method: any) {
    return function* () {
        yield takeEvery(`${cur_namespace}/${method_name}`, onEffect);
    };

    /*
     * 将{ put, take, takeEvery, select, call, fork, cancel } 方法，注入到cur_method 的第二个参数
     * 添加saga 启动结束标识
     */

    function noop() {}
    function* onEffect(...args: any) {
        const { _resolve: resolve = noop, _reject: reject = noop } = args.length > 0 ? args[0] : {};
        try {
            yield put({ type: `${cur_namespace}/${method_name}/@@start` });
            const ret = yield cur_method(...args, { put, take, takeEvery, select, call, fork, cancel });
            yield put({ type: `${cur_namespace}/${method_name}/@@end` });
            resolve(ret);
        } catch (e: any) {
            if (!e._dontReject) {
                reject(e);
            }
        }
    }
}

export default sagas;
