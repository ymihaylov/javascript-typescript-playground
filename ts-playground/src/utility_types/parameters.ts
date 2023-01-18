declare function f1(arg: { a:number; b: string }): void;

type T0 = Parameters<() => string>;

type T1 = Parameters<(s: string) => void>;

type T3 = Parameters<typeof f1>;

type T4 = ConstructorParameters<ErrorConstructor>;

