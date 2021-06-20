import { LoudGreeter } from "../src/loud-greeter";

describe("loudgreeter", () => {
    test('default', () => {
        const loudGreeter1: LoudGreeter = new LoudGreeter('Hey');
        expect(loudGreeter1.greet('Andrew')).toBe('Hey, Andrew!!');
    });
    test('one addvolume', () => {
        const loudGreeter2: LoudGreeter = new LoudGreeter('Servus');
        loudGreeter2.addVolume();
        expect(loudGreeter2.greet('Wolfi')).toBe('Servus, Wolfi!!!');
    });
    test('three add volume', () => {
        const loudGreeter3: LoudGreeter = new LoudGreeter('Hey');
        loudGreeter3.addVolume();
        loudGreeter3.addVolume();
        loudGreeter3.addVolume();
        expect(loudGreeter3.greet("listen")).toBe('Hey, listen!!!!!');
    })
})