
const variableSaludo = function () {
  return;
  console.log("Hola mundo.");
};
console.log(variableSaludo());

function checkStringLength(myString) {
  if (typeof myString !== "string") {
    return false;
  }
  if (myString.length >= 5) {
    return true;
  } else {
    return false;
  }
}

console.log(checkStringLength(100)); // false
console.log(checkStringLength("Hola")); // false
console.log(checkStringLength("Hola mundo")); // true
