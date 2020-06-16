import {exposedPromise} from "..";

describe("Exposed promise", () => {

    it("Should resolve", async () => {
        const {promise, resolve} = exposedPromise<number>();
        resolve(5);
        await expect(promise).resolves.toBe(5);
    });

    it("Should reject", async () => {
        const {promise, reject} = exposedPromise<number>();
        const err = new Error("test");
        reject(err);
        await expect(promise).rejects.toBe(err);
    });

    it("No double resolve", async () => {
        const {promise, resolve} = exposedPromise<number>();
        resolve(5);
        resolve(6);
        await expect(promise).resolves.toBe(5);
    });

});
