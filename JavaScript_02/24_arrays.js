const array1 = [1, 2, 3, 4, 5];

const [value1, value2, value3] = array1; // Destructuring assignment
console.log(value1); // 1
console.log(value2); // 2
console.log(value3); // 3

// añadir un elemento al final del array
array1.push(6);
console.log(array1); // [1, 2, 3, 4, 5, 6]

// pon ejemplos de diferentes funciones de arrays
const array2 = [1, 2, 3, 4, 5];
const array3 = [6, 7, 8, 9, 10];

// concatenar arrays
const concatenatedArray = array2.concat(array3);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtrar elementos
const filteredArray = array2.filter(num => num > 2);
console.log(filteredArray); // [3, 4, 5]

// mapear elementos (transformar)
const mappedArray = array2.map(num => num * 2);
console.log(mappedArray); // [2, 4, 6, 8, 10]

// reducir elementos (acumular)
const reducedValue = array2.reduce((acc, num) => acc + num, 0);
console.log(reducedValue); // 15

// encontrar un elemento
const foundElement = array2.find(num => num === 3);
console.log(foundElement); // 3

// encontrar el índice de un elemento
const foundIndex = array2.findIndex(num => num === 3);
console.log(foundIndex); // 2

// comprobar si un elemento existe en el array
const exists = array2.includes(3);
console.log(exists); // true

// comprobar si todos los elementos cumplen una condición
const allGreaterThanZero = array2.every(num => num > 0);
console.log(allGreaterThanZero); // true

// comprobar si al menos un elemento cumple una condición
const someGreaterThanFive = array2.some(num => num > 5);
console.log(someGreaterThanFive); // false

// invertir el array
const reversedArray = array2.reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]

// ordenar el array
const sortedArray = array2.sort((a, b) => a - b);
console.log(sortedArray); // [1, 2, 3, 4, 5]

// unir elementos en una cadena
const joinedString = array2.join(", ");
console.log(joinedString); // "1, 2, 3, 4, 5"

// dividir una cadena en un array
const stringToSplit = "1, 2, 3, 4, 5";
const splitArray = stringToSplit.split(", ");
console.log(splitArray); // ["1", "2", "3", "4", "5"]

// eliminar el último elemento del array
const poppedValue = array2.pop();
console.log(poppedValue); // 5
console.log(array2); // [1, 2, 3, 4]
