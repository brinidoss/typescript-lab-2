export class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    //methods
    greet(name: string): string {
        return `${this.greeting}, ${name}!`;
    }
}