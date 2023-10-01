let s = "Currency rate";
let s2 = "Currency rate";
console.log(s);
let mix = "The rate for 'usd/eur' is 0.9";
let mix2 = 'The rate for "usd/eur" is 0.9';
console.log('What do you mean by "code"');
console.log("It's not what I meant");
let backticks = `Multi
line string`;
const pair = "usd/eur";
const rate = 0.9;
const simple_concat = "The rate for " + pair + " is " + rate;
console.log(simple_concat);
// const sum = 100;
// let complex_literal = `A ${"$" + sum} is worth Euros`;
// console.log(complex_literal);

// no!
let currencyPairCount = 2; // usd/eur and usd/jpy
let onePair = 1;
let offer = `We currently convert ${
  currencyPairCount < 2 ? `${onePair} currency pair` : currencyPairCount
} currency pairs`;
console.log(offer);

// yes!
let currencyPairCount2 = 2; // usd/eur and usd/jpy
let onePair2 = 1;
let availablePairsCount =
  currencyPairCount2 < 2
    ? `${onePair2} currency pair`
    : `${currencyPairCount2} currency pairs`;
let offerMessage = `We currently convert ${availablePairsCount}`;
console.log(offerMessage);

let stringObject = new String("hello");
console.log(typeof "hello");
console.log(typeof stringObject);

function getFirstLetter(str) {
  if (!isString(str)) {
    throw "Parameter is not a string";
  }
  return str.charAt(0);
}

console.log(getFirstLetter("abc"));
console.log(getFirstLetter(new String("abc")));
// console.log(getFirstLetter(2));

function isString(value) {
  return typeof value === "string" || String.prototype.isPrototypeOf(value);
}

// before
// ----------
const ourFee = 0.01;
const competitorFee = 0.02;
console.log("Compare our fees with competition. To convert 100 USD to EUR:");
const message =
  "Us: $" + 100 * ourFee + " | Competitor: $" + 100 * competitorFee;
console.log(message);

// after
// ----------
const sum = 100;
const newMessage = `Us: $${calculateFee(
  sum,
  ourFee
)} | Competitor: $${calculateFee(sum, competitorFee)}`;
console.log(newMessage);

function calculateFee(sum, fee) {
  return sum * fee;
}
