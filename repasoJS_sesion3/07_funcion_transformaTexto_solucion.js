/*
Crea una función transformarFrase que reciba dos parámetros: una frase y una función (como objeto) que transforme cada palabra.
Para ello, primero vamos a hacer un preprocesamiento común dentro de transformarFrase, que limpie la frase de espacios extra, carácteres especiales como salto de línea, tabulaciones, etc.

Después, hay que generar dos funciones que transformen las palabras:
1. La primera función debe transformar las palabras a mayúsculas.
2. La segunda función debe transformar las palabras añadiendo un símbolo < al principio y >  al final.

Para esto, revisa la función split asociada a las cadenas.
*/

function limpiarTexto(frase){
    return frase.replace(/\s+/g, ' ').trim();
}

function transformarFrase(frase, transformador) {
    // Limpiar la frase de espacios extra, saltos de línea y tabulaciones
    frase = limpiarTexto(frase);

    // separamos la frase en palabras
    let palabras = frase.split(" ");
    for(let i=0; i<palabras.length; i++){
        palabras[i] = transformador(palabras[i]);
    }
    return palabras.join(" ");
}

function añadirSimbolos(palabra){
    return `<${palabra}>`;
}

function añadirSimbolo2(palabra){
    return `{${palabra}}`
}

function convertirAMayus(palabra){
    return palabra.toUpperCase();
}

console.log(transformarFrase("El cielo es azul", añadirSimbolos));
console.log(transformarFrase("El cielo es azul", añadirSimbolo2));
console.log(transformarFrase("El cielo es azul", convertirAMayus));

function  transformarFraseSimbolo1(frase) {
    // Limpiar la frase de espacios extra, saltos de línea y tabulaciones
    //frase = frase.replace(/\s+/g, ' ').trim();

    // separamos la frase en palabras
    let palabras = frase.split(" ");
    for(let i=0; i<palabras.length; i++){
        palabras[i] = `<${palabras[i]}>`;
    }
    return palabras.join(" ");
}

function  transformarFraseSimbolo2(frase) {
    // Limpiar la frase de espacios extra, saltos de línea y tabulaciones
    //frase = frase.replace(/\s+/g, ' ').trim();

    // separamos la frase en palabras
    let palabras = frase.split(" ");
    for(let i=0; i<palabras.length; i++){
        palabras[i] = `{${palabras[i]}}`;
    }
    return palabras.join(" ");
}