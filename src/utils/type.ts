export const tuple = <T extends string[]>(...args: T) => args;
export const tupleNum = <T extends number[]>(...args: T) => args;

//定义类型 ElementOf 参数T ， T 继承未知类型E, 重合部分输出E, 不重合部分输出只读属性F
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;
