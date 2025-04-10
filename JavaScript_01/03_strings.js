// strings
console.log("Hola mundo.");
console.log('Hola mundo.'); // Diferentes formas de definir cadenas
console.log(`Hola mundo.`); // Template literals (plantillas literales)

// uso del escape
console.log( '"I\'m a string," I said.' );

// uso de String()
console.log(String(123)); // Convierte el número 123 a cadena
console.log(String(true)); // Convierte el booleano true a cadena
console.log(String(false)); // Convierte el booleano false a cadena

let myString = 10;
console.log(myString.toString());
console.log(typeof myString.toString());

// Ejemplo de literales de plantilla
console.log(`Hola ${myString}`); // Interpolación de variables
console.log(` Salto
  de línea`); // Salto de línea

/*
console.log("Hola
  mundo"); // Salto de línea
*/