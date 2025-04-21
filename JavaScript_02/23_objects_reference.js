let a = 10;
// copia de variables por valor
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10

// copia de objetos por referencia
const obj1 = {
  name: "John",
  age: 30,
};
const obj2 = obj1;
obj1.name = "Jane";
console.log(obj1.name); // Jane
console.log(obj2.name); // Jane

// copia de objetos superficial
const obj3 = { ...obj1 }; // copia superficial
obj3.name = "Doe";
console.log(obj1.name); // Jane
console.log(obj3.name); // Doe

// copia de objetos profundo
const obj4 = JSON.parse(JSON.stringify(obj1)); // copia profunda
obj4.name = "Smith";
console.log(obj1.name); // Jane
console.log(obj4.name); // Smith

const obj5 = structuredClone(obj1); // copia profunda
obj5.name = "Brown";
console.log(obj1.name); // Jane
console.log(obj5.name); // Brown
