/*
Crea una función que cuente cuántas vocales hay en una palabra.
*/

const VOCALES = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
let a = "hola";

function contarVocales(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (VOCALES.has(caracter)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales(a));
console.log(contarVocales("la lluvia en sevilla es una maravilla"));
console.log(contarVocales(100));