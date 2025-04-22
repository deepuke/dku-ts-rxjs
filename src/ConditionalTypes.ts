type IsString<T> = T extends string ? 'It is string' : "It isn't string";

export type Test1 = IsString<string>;
export type Test2 = IsString<number>;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
