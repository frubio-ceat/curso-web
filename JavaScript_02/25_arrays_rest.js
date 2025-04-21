// copia de arrays por referencia
const a = [1, 2, 3, 4, 5];
const b = a;
a[0] = 100;
console.log(b);

// copia de objetos por referencia
const c = {
  name: "John",
  age: 30,
}

const d = c;
c.name = "Jane";
console.log(d);