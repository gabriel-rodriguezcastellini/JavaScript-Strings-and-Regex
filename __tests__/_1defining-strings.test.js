// __tests__/_1defining-strings.test.js
const { getFirstLetter } = require("../_1defining-strings");

test("getFirstLetter returns the first letter of a string", () => {
  expect(getFirstLetter("hello")).toBe("h");
});

test("getFirstLetter throws an error if the parameter is not a string", () => {
  expect(() => getFirstLetter(123)).toThrow("Parameter is not a string");
});
