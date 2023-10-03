const regexLiteral = /Script/g;
const regexObject = new RegExp("Script", "g");
console.log("JavaScript CoffeeScript".match(regexLiteral));
console.log("JavaScript CoffeeScript".match(regexObject));
let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digits_global = /\d+/g;
console.log(digits.test(text));
console.log(text.search(digits)); // -1 if no match
console.log(text.match(digits_global));
