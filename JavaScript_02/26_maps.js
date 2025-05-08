// const mapa = new Map(); // Crea un mapa vacío
const mapa = new Map([
  ['clave1', 'valor1'],
  [NaN, 'valor2'],
  [0, 'valor3'],
  [true, 'valor4']
]);

console.log(mapa); // Muestra el mapa completo

// get devuelve el valor asociado a la clave
console.log(mapa.get('clave1')); // Muestra el valor asociado a 'clave1'
console.log(mapa.get(NaN)); // Muestra el valor asociado a NaN

// set añade un nuevo par clave-valor al mapa
mapa.set('clave', 1);
mapa.set({ id: 1 }, 'valor asociado a un objeto');

console.log(mapa); // Muestra el mapa completo
console.log(mapa.get({ id: 1 })); // 

// has devuelve true si la clave existe en el mapa
console.log(mapa.has('clave1'));
console.log(mapa.has('clave2'));

// delete elimina un par clave-valor del mapa
mapa.delete('clave1');
console.log(mapa); // Muestra el mapa completo
