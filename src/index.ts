export interface ExposedPromise<T> {
    promise: Promise<T>;
    resolve: (t: T) => void;
    reject: (err?: any) => void;
}

export function exposedPromise<T>(): ExposedPromise<T> {
    let _resolve: (t: T) => void | undefined;
    let _reject: (err?: any) => void | undefined;
    const promise = new Promise<T>((resolve, reject) => {
        _resolve = resolve;
        _reject = reject;
    });
    return { promise, resolve: _resolve!, reject: _reject! };
}
