interface stateType {
    name: string;
}
interface actionType {
    payload: {
        name?: string;
    };
}

interface spaceType {
    namespace: string;
    state: stateType;
    effect?: object;
    reducers?: object;
}

const test2 = {
    namespace: 'test2',
    state: {
        name: 'hello world',
    }, // 初始值

    effects: {
        *fetch(action: actionType, { put }) {
            yield put({ type: 'test2/changeName', payload: { name: 'ok' } });
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
export default test2;
