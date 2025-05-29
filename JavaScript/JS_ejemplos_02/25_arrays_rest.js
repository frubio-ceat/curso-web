// copia de arrays por referencia
let a = [1, 2, 3, 4, 5];
let b = a;
a[0] = 100;
console.log(b);

// copia de arrays por valor con los tres puntos (...) de dispersión
let c = [...a, 10, 100];
a[0] = 1000
console.log(c);

// copia de objetos por referencia
/*
const c = {
  name: "John",
  age: 30,
}

const d = c;
c.name = "Jane";
console.log(d);
*/