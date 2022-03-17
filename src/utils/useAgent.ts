/**
 * 获取浏览器内核 和 浏览器名称
 */

export function browserType() {
    const ua = navigator.userAgent.toLowerCase();
    const testUa = (regexp) => regexp.test(ua);

    let engine = "unknown";
    let supporter = "unknown";
    if (testUa(/applewebkit/g)) {
        engine = "webkit"; // webkit内核
        if (testUa(/edge/g)) {
            supporter = "edge"; // edge浏览器
        } else if (testUa(/opr/g)) {
            supporter = "opera"; // opera浏览器
        } else if (testUa(/chrome/g)) {
            supporter = "chrome"; // chrome浏览器
        } else if (testUa(/safari/g)) {
            supporter = "safari"; // safari浏览器
        }
    } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
        engine = "gecko"; // gecko内核
        supporter = "firefox"; // firefox浏览器
    } else if (testUa(/presto/g)) {
        engine = "presto"; // presto内核
        supporter = "opera"; // opera浏览器
    } else if (testUa(/trident|compatible|msie/g)) {
        engine = "trident"; // trident内核
        supporter = "iexplore"; // iexplore浏览器
    }

    return {
        engine, // 内核
        supporter, // l浏览器
    };
}

// 全局只检测一次
let isSupport = false;
export function browserSupport() {
    if (isSupport) {
        // console.log('支持');
        return true;
    }

    const { engine } = browserType();
    const checkEng: Array<string> = ["webkit", "gecko"];

    const res = checkEng.indexOf(engine.toString());
    if (res !== -1) {
        isSupport = true;
    }
    return isSupport;
}
