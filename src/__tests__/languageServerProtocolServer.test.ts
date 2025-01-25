import { readTestApexClass } from "./utils/readApexClass";

describe('intellisense', () => {
    it('should be able to get completions for ', () => {
        const fooApexClassContents = readTestApexClass('Foo');
        console.log(fooApexClassContents);

        expect(1).toBe(1);
    });
});