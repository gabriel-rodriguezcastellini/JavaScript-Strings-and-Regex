// _1defining-strings.js
console.log("Currency rate");

function getFirstLetter(str) {
  if (typeof str !== "string") {
    throw new Error("Parameter is not a string");
  }
  return str.charAt(0);
}

// Ensure calculateFee is declared only once
function calculateFee(sum, fee) {
  return sum * fee;
}

module.exports = { getFirstLetter, calculateFee };
