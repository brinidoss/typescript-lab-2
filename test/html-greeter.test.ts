import { HtmlGreeter } from "../src/html-greeter";

describe('htmlgreeter', () => {
    test('default', () => {
        const htmlGreeter1: HtmlGreeter = new HtmlGreeter('Howdie');
        expect(htmlGreeter1.greet('Monica')).toBe('<h1>Howdie, Monica!</h1>');
    });
    test('p tag', () => {
        const htmlGreeter2: HtmlGreeter = new HtmlGreeter('God dag', 'p');
        expect(htmlGreeter2.greet('Harald')).toBe('<p>God dag, Harald!</p>');
    })
})