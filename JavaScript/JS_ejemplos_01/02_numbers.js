let myVariable = 5; // Variable de tipo number
console.log(typeof myVariable); // Imprime "number"
console.log("two" * 2);

myVariable = Number(10);
console.log(myVariable === 10);
console.log(typeof myVariable); // Imprime "number"

// Errores de precisión en números de punto flotante
console.log(0.1 + 0.7) // Imprime 0.7999999999999999
console.log(0.1 + 0.7 === 0.8) // Imprime false

// Ejemplos de conversión de tipos a número.
console.log("\nNumber");
console.log(Number("10")); // Imprime 10
console.log(Number("10.5")); // Imprime 10.5
console.log(Number("10,5")); // Imprime NaN (Not a Number)
console.log(Number("10a")); // Imprime NaN (Not a Number)

// ahora otros tipos de función de conversión
console.log("\nParseInt");
console.log(parseInt("10")); // Imprime 10
console.log(parseInt("10.5")); // Imprime 10
console.log(parseInt("10,5")); // Imprime 10
console.log(parseInt("10a")); // Imprime 10
console.log(parseInt("a10")); // Imprime NaN (Not a Number)

console.log("\nParseFloat");
console.log(parseFloat("10")); // Imprime 10
console.log(parseFloat("10.5")); // Imprime 10.5
console.log(parseFloat("10,5")); // Imprime 10
console.log(parseFloat("10a")); // Imprime 10
console.log(parseFloat("a10")); // Imprime NaN (Not a Number)

// Operadores
console.log("\nOperadores");
let a = 5;
a += 10; // Suma 10 a a
console.log(a); // Imprime 15

console.log("incremento de a:");
let prueba = ++a; // Incrementa a y luego asigna a prueba
let prueba2 = a++; // Asigna a prueba2 y luego incrementa a
console.log(prueba); // Imprime 16
console.log(prueba2); // Imprime 16


let b = 5;
b **= 2; // Eleva b a la potencia de 2
console.log(b); // Imprime 25


// Ejemplos de NaN (Not a Number)
console.log("\nNaN Section");
console.log("2" + 2); // Imprime "22" (concatenación)
console.log("2" - 2); // Imprime 0 (resta)

// ¿Y en estos casos?
console.log("2" * 2);
console.log("two" * 2);

