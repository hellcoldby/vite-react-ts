export default function createPromiseMiddleware(effects: any) {
    return () => (next) => (action) => {
        const { type } = action;
        if (isEffect(type)) {
            return new Promise((resolve, reject) => {
                next({
                    _resolve: resolve,
                    _reject: reject,
                    ...action,
                });
            });
        } else {
            return next(action);
        }
    };

    function isEffect(type: any) {
        if (!type || typeof type !== 'string') return false;
        const [namespace] = type.split('/');
        //当前命名空间下的 effects 列表
        const cur_effects = effects[namespace];
        if (cur_effects) {
            return true;
        }
        return false;
    }
}
