import { JavaScriptGreeter } from "../src/javascript-greeter";

describe("javascriptgreeter", () => {
    test("greeting opt 1", () => {
        const javaScriptGreeter1: JavaScriptGreeter = new JavaScriptGreeter("Hi");
        expect(javaScriptGreeter1.greet("Ryan")).toBe(`console.log('Hi, Ryan!')`);
    });
    test('greeting opt 2', () => {
        const javaScriptGreeter2: JavaScriptGreeter = new JavaScriptGreeter("Hola");
        expect(javaScriptGreeter2.greet("Manuel")).toBe(`console.log('Hola, Manuel!')`);
    })
})