console.log("Objetos:");
const persona = {
  "nombre": "Ana",
  edad: 30,
  //`apellido`: "Gómez"
};

console.log(persona.nombre); // Ana
console.log(persona["edad"]); // 30

console.log("\nMutar objetos:");
// mutar el objeto
persona.nombre = "María";
console.log(persona.nombre); // María

// agregar propiedades al objeto
persona.apellido = "Gómez";
console.log(persona.apellido); // Gómez

// eliminar propiedades del objeto
delete persona.edad;
console.log(persona.edad); // undefined

// agregar objeto como propiedad
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};
persona.coche = coche;
console.log(persona);
console.log(persona.coche); // { marca: 'Toyota', modelo: 'Corolla', año: 2020 }

console.log("\nMétodos de objetos:");
// agregar función como propiedad
persona.saludarMundo = function() {
  console.log("Hola, mundo.");
}
persona.saludarMundo(); // Hola, mundo.
// agregar función con this como propiedad
persona.saludar = function() {
  console.log("Hola, soy " + this.nombre + ".");
}
persona.saludar(); // Hola, soy María.

// agregar función con this como propiedad (con arrow function)
persona.saludar2 = () => {
  console.log("Hola, soy " + this.nombre + ".");
}
persona.saludar2(); // Hola, soy undefined. (no funciona porque this no apunta al objeto persona)
