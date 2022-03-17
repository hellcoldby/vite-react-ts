import { states_list, reducers_list, effects_list } from './parse_file';

//创建状态列表
const initState = states_list;
// console.log(initState);

export default function reducer(state = {}, action: any) {
    if (action && action.type === '@@INIT') {
        //排除redux初始化的type类型
        return initState;
    }

    if (!action?.type || action.type.indexOf(`/`) === -1) {
        throw new Error('action没有正确的type, 格式为：namespace/method');
    }

    //解析文件名 和 方法名
    const action_path = action.type.split('/');
    const file_ame: string = action_path[0];
    const file_method: string = action_path[1];

    //当前命名空间下的 reducers列表 和 effects列表
    const cur_reduces = reducers_list[file_ame];
    const cur_effects = effects_list[file_ame];

    if (!cur_reduces || !cur_reduces[file_method]) {
        return initState;
    } else {
        // console.log(file_ame, file_method, cur_effects, cur_reduces);
        //命名空间的reducers下的方法
        const cur_state = cur_reduces[file_method](initState[file_ame], action);
        initState[file_ame] = cur_state;

        return initState;
    }
}
