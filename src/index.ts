import { Greeter } from './greeter';
import { JavaScriptGreeter } from './javascript-greeter';
import { LoudGreeter } from './loud-greeter';
import { HtmlGreeter } from './html-greeter';
import promptSync from 'prompt-sync';
import chalk from 'chalk';
import { ChalkGreeter } from './chalk-greeter';

//greeter
const greeter1: Greeter = new Greeter("Hello");
const greeter2: Greeter = new Greeter("Guten Tag");

//console.log(greeter1);
//console.log(greeter2);

console.log(greeter1.greet('Brittany'));
console.log(greeter2.greet('Emil'));

//javascript greeter
const javaScriptGreeter1: JavaScriptGreeter = new JavaScriptGreeter("Hi");
const javaScriptGreeter2: JavaScriptGreeter = new JavaScriptGreeter("Hola");

console.log(javaScriptGreeter1.greet("Ryan"));
console.log(javaScriptGreeter2.greet("Manuel"));

//loud greeter
const loudGreeter1: LoudGreeter = new LoudGreeter('Hey');
const loudGreeter2: LoudGreeter = new LoudGreeter('Servus');

console.log(loudGreeter1.greet('Andrew'));

loudGreeter2.addVolume();
console.log(loudGreeter2.greet('Wolfi'));
loudGreeter2.addVolume();
console.log(loudGreeter2.greet('Wolfi'));
loudGreeter2.addVolume();
console.log(loudGreeter2.greet('Wolfi'));
loudGreeter2.addVolume();
console.log(loudGreeter2.greet('Wolfi'));

//html greeter
const htmlGreeter1: HtmlGreeter = new HtmlGreeter('Howdie');
const htmlGreeter2: HtmlGreeter = new HtmlGreeter('God dag', 'p');

console.log(htmlGreeter1.greet('Monica'));
console.log(htmlGreeter2.greet('Harald'));


//prompt-sync

const prompt = promptSync();
const userName = prompt('What is your name?');

const greetUser: Greeter = new Greeter("Wassup");
const javaScriptGreetUser: JavaScriptGreeter = new JavaScriptGreeter("Wassup");
const loudGreetUser: LoudGreeter = new LoudGreeter('Wassup');
const htmlGreetUser: HtmlGreeter = new HtmlGreeter('Wassup');
const chalkGreetUser: ChalkGreeter = new ChalkGreeter('Wassup');


console.log(greetUser.greet(userName));
console.log(javaScriptGreetUser.greet(userName));
console.log(loudGreetUser.greet(userName));
console.log(htmlGreetUser.greet(userName));
console.log(chalkGreetUser.greet(userName));

//chalk 

const chalkGreeter1: ChalkGreeter = new ChalkGreeter('Hello');

console.log(chalkGreeter1.greet('world'));


