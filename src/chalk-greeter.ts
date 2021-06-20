import { Greeter } from "./greeter";
import chalk from 'chalk';

export class ChalkGreeter extends Greeter {
    constructor(greeting: string) {
        super(greeting);
    }

    greet(name: string): string {
        return chalk.blue(this.greeting) + chalk.red(", ") + chalk.green(name);
    }
}