
const conjunto = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(conjunto); // Muestra el conjunto completo
console.log(conjunto.size); // Muestra el tamaño del conjunto

// Añadir elementos al conjunto
conjunto.add(11);
conjunto.add(12);
console.log(conjunto); // Muestra el conjunto completo

// Eliminar elementos del conjunto
conjunto.delete(1);
console.log(conjunto); // Muestra el conjunto completo

// Comprobar si un elemento existe en el conjunto
console.log(conjunto.has(1)); // false
console.log(conjunto.has(2)); // true

// Convertir un conjunto a un array
const arrayDesdeConjunto = Array.from(conjunto);
console.log(arrayDesdeConjunto); // Muestra el array convertido desde el conjunto

// Operacion union entre conjuntos
const conjuntoA = new Set([1, 2, 3]);
const conjuntoB = new Set([3, 4, 5]);
const unionConjunto = conjuntoA.union(conjuntoB);
console.log(unionConjunto); // Muestra el conjunto de la unión

// Operacion interseccion entre conjuntos
const interseccionConjunto = conjuntoA.intersection(conjuntoB);
console.log(interseccionConjunto); // Muestra el conjunto de la intersección

// Operacion diferencia entre conjuntos
const diferenciaConjunto = conjuntoA.difference(conjuntoB);
console.log(diferenciaConjunto); // Muestra el conjunto de la diferencia
