import _ from 'lodash';

// deep copy
const deepCopyObj = (param) => JSON.parse(JSON.stringify(param));

// 截取类型判断字段
const _cutType = (param) => Object.prototype.toString.call(param).slice(8, -1);

// 判断是否是数组
const isArray = (param) => _cutType(param) === 'Array';

// 判断是否是函数
const isFn = (param) => _cutType(param) === 'Function';

// 判断是否是数字
const isNumber = (param) => _cutType(param) === 'Number' && !isNaN(param);

// 判断是否是字符串
const isString = (param) => _cutType(param) === 'String';

// 判断是否是布尔值
const isBoolean = (param) => _cutType(param) === 'Boolean';

// 判断是否是对象
const isObject = (param) => _cutType(param) === 'Object';

// 判断是否是个时间对象
const isDate = (param) => _cutType(param) === 'Date';

// 判断是否是空对象
const isEmptyObject = (param) => (_cutType(param) === 'Object' && !(Object.keys(param).length > 0)) || false;

// 判断是否是 null 或 undefined
// eslint-disable-next-line no-undefined
const isExist = (param) => param === null || param === undefined || false;

// 补零
const zeroize = (n) => (Number(n) < 10 ? `0${n}` : `${n}`);

// 获取地址栏查询参数的值
const getQueryString = (key) => {
    let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
};

// 去除前后空格
const trim = (str) => str.replace(/(^\s*)|(\s*$)/g, '');

// 阻止冒泡事件
const stopEvent = (e) => {
    e.stopPropagation();
    // 阻止与原生事件的冒泡
    e.nativeEvent.stopImmediatePropagation();
    // e.returnValue = false;
    // return false;
};

// 获取值, lodash get方法基础上增加了 null校验，取到的值为null返回默认值
const _get = (obj, path, defaultValue) => {
    const _res = _.get(obj, path, defaultValue);
    return _res === null ? defaultValue : _res;
};
// 空函数
const noop = () => {};

// 防抖处理合成事件 --- 立即执行
function debounce(callback, delay = 150) {
    let timer = null;

    return function (event) {
        // eslint-disable-next-line
        const _this = this;
        if (timer) {
            clearTimeout(timer);
        } else {
            callback.apply(_this, arguments);
        }

        timer = setTimeout(() => {
            timer = null;
        }, delay);
    };
}
// 防抖处理合成事件 --- 延迟执行
function debounceDelay(callback, delay = 80) {
    let timer = null;
    return function (event) {
        event.persist();
        // eslint-disable-next-line
        const _this = this;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // eslint-disable-next-line
            callback.apply(_this, arguments);
        }, delay);
    };
}

export {
    isArray, // 判断是否是数组
    isFn, // 判断是否是函数
    isNumber, // 判断是否是数字
    isString, // 判断是否是字符串
    isBoolean, // 判断是否是布尔值
    isObject, // 判断是否是对象
    isDate, // 判断是否是个时间对象
    isEmptyObject, // 判断是否是空对象
    isExist, // 判断是否是 null 或 undefined
    zeroize, // 补零
    getQueryString, // 获取地址栏查询参数的值
    _get, // 获取值
    trim, // 去除前后空格
    stopEvent, // 阻止冒泡事件
    noop, // 空函数
    deepCopyObj,
    _cutType,
    debounce, //立即执行
    debounceDelay, //延迟执行
};
