/**
 * vite --- 内置了 import.meta.globEager  遍历目录
 *
 * {
 *   'name': { fn:()=>{} }
 * }
 *
 */
const models_map = import.meta.globEager('../models/*.(t|j)s');
console.log('reducer目录映射表', models_map);

const models_list: object = {}; // 命名空间 --> 文件模块
const states_list: object = {}; // 命名空间对应的state 列表
const reducers_list: object = {}; //命名空间对应的reduces 列表
const effects_list: object = {}; // 命名空间对应的effects 列表
for (const item in models_map) {
    const namespace = models_map[item].default.namespace;
    const cur_models = models_map[item].default;
    models_list[namespace] = cur_models;
    states_list[namespace] = cur_models?.state;
    reducers_list[namespace] = cur_models?.reducers;
    effects_list[namespace] = cur_models?.effects;
}

export { models_list, states_list, reducers_list, effects_list };
