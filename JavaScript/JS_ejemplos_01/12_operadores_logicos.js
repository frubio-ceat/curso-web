/*
console.log("\nOperación 1")
console.log(2 === 3 || 5 === 5);

console.log("\nOperación 2")
console.log(2 === 2 && 2 === "2");

console.log("\nOperación 3")
console.log(2 === 2 && !"My string.");


console.log("\nOperación 4")
console.log(!"string");

console.log("\nOperación 5")
console.log(!!"string");


console.log("\nOperación 6")
console.log(0 && "");

console.log("\nOperación 7")
console.log(1 && "hola");

console.log("\nOperación 8")
console.log(0 || "my string");

console.log("\nOperación 9")
console.log(1 || "hola");
*/

//let usuarioBaseDatos = leerNombreBaseDatos();
let usuarioBaseDatos;
usuarioBaseDatos ||= "Anonimo";
usuarioBaseDatos ??=  "Anonimo";

console.log("usuario 1 "+usuarioActual);
console.log("usuario 2 "+usuarioActual2);

// +=
let myNumero = 10;
myNumero += 5;
myNumero = myNumero + 5;

// &&=
let myNumero2 = 10;
myNumero2 &&= 5;
myNumero2 = myNumero2 && 5;

let conectado = true;
conectado &&= "Usuario conectado";
console.log(conectado); // "Usuario conectado"

let nombre = "dsf";
nombre ||= "Anónimo";
console.log(nombre); // "Anónimo"

let edad = null;
edad ??= 18;
console.log(edad); // 18

if (edad === null || edad === undefined) edad = 18; 
