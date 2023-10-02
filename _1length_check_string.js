console.log("ab".length);

function isEmpty(str) {
  if (!isString(str)) {
    return true; // or throw
  }
  return str.length === 0;
}

function isString(value) {
  return typeof value === "string" || String.prototype.isPrototypeOf(value);
}

console.log("isEmpty: ");
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("")); // true
console.log(isEmpty(new String(""))); // true
console.log(isEmpty(" ")); // false
console.log(isEmpty("a")); // false
console.log(isEmpty(new String("a"))); // false

function isEmpty2(str) {
  return !str || str.length === 0;
}

function isBlank(str) {
  return str.trim().length === 0;
}

console.log("isBlank: ");
console.log(isBlank("a")); // false
console.log(isBlank("")); // true
console.log(isBlank(" ")); // true
console.log(isBlank(" \t\n\r ")); // true
console.log(isBlank("\u2002")); // true

"a".trim();
let cd = "CD";
cd.toLowerCase();
console.log(cd);

console.log("Basic comparisons:");
console.log("a" === "a");

let b = "b";
console.log("ab" === `a${b}`);

console.log("a" === new String("a")); // false, string vs object
console.log("a" === new String("a").toString()); // true

function areEqual(str1, str2) {
  return str1 === str2;
}

console.log("areEqual:");
console.log(areEqual("a", "a")); // true
console.log(areEqual("a", "A")); // false
console.log(areEqual("a", new String("a"))); // false
console.log(areEqual(new String("a"), new String("a"))); // false

function areEqual_2(str1, str2) {
  let s1 = coerceObjectString(str1);
  let s2 = coerceObjectString(str2);
  return s1 === s2;
}

function coerceObjectString(str) {
  if (typeof str === "object" && String.prototype.isPrototypeOf(str)) {
    return str.toString();
  } else {
    return str;
  }
}

console.log("areEqual_2:");
console.log(areEqual_2("a", "a")); // true
console.log(areEqual_2("a", "A")); // false
console.log(areEqual_2("a", new String("a"))); // true
console.log(areEqual_2(new String("a"), new String("a"))); // true

const cafe = "café";
const cafe2 = "cafe";
const reserved = "réservé";
const reserved2 = "reserve";

function isEqualIgnoreDiacritic(str1, str2) {
  return str1.localeCompare(str2, undefined, { sensitivity: "case" }) === 0;
}

console.log(isEqualIgnoreDiacritic(cafe, cafe2));
console.log(isEqualIgnoreDiacritic(reserved, reserved2));

let names = ["Andrejs", "candrejs", "Ándrejs"];

function sortStringArray(stringArray) {
  let copy = stringArray.slice();
  copy.sort((a, b) => a.localeCompare(b));
  return copy;
}

console.log(sortStringArray(names));

let ranks = ["2 - Germany", "1 - US", "10 - India", "22 - France"];

function sortNumberedStrings(numberedStringArray) {
  let copy = numberedStringArray.slice();
  copy.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return copy;
}

console.log(sortNumberedStrings(ranks));

let num = 1;
let message = "JavaScript is the number " + num + " language";
console.log(`JavaScript is the number ${num} language`);
console.log("a ".concat("b"));
let languages = ["JavaScript", "Java"];
console.log("My favourite languages are: ".concat(languages));
console.log("This is a String".indexOf("is a")); // 5, -1 if no match

languages =
  "These are my favourite languages: JavaScript, TypeScript, CoffeScript.";

function collectList(str) {
  const start = str.indexOf(":") + 1;
  return str.slice(start, str.indexOf(".", start)).split(",");
}

console.log(collectList(languages));

console.log("Slice: ");
console.log("Hello".slice()); // makes a copy
console.log("Hello".slice(1)); // ello
console.log("Hello".slice(-1)); // o
console.log("Hello".slice(1, -1)); // ell

function last(subject, length) {
  return subject.slice(-length);
}

console.log("Slice vs last: ");
console.log(last("Once upon a time", 4));
console.log("Once upon a time".slice(-4));

num = 10;
const s = num + "";
console.log(typeof s);
console.log(typeof num.toString());
console.log("Converting a Number:");
const numWithDecimals = 15.0156;
console.log(numWithDecimals.toFixed(2));
console.log(numWithDecimals.toPrecision(3));

const sum = 123456;
const rate = 0.8;
console.log(`${sum} USD is ${(sum * rate).toFixed(2)} EUR`);

let lotteryWin = 9007199254740993;
message = `You've won ${lotteryWin}!`;
console.log(message);
