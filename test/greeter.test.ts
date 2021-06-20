import { Greeter } from "../src/greeter";

describe("Greeter", () => {
    test("greeting and name opt 1", () => {
        const greeter1: Greeter = new Greeter("Hello");
        expect(greeter1.greet('Brittany')).toBe("Hello, Brittany!");
    });
    test("greeting and name opt 2", () => {
        const greeter2: Greeter = new Greeter("Guten Tag");
        expect(greeter2.greet('Emil')).toBe("Guten Tag, Emil!");
    })
})