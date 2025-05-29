
const variableSumar = function(a,b) {
  return a + b;
};

console.log(variableSumar(10,100));

let suma2valores = variableSumar(10,100);

// Si se añaden los corchetes, se tiene que usar el return

const variableSumar2 = (a,b) => a + b;

console.log(variableSumar(2,3)); // 5
console.log(variableSumar2(2,3)); // 5

let operador = a<=10 ? (a<=5 ? "pequeño" : "normal") : (a>100 ? "muy grande" : "grande");
