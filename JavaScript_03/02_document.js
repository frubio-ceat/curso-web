// getElementById devuelve un solo elemento con el id especificado
let elemento = document.getElementById("titulo");
// elemento es un objeto del DOM, podemos acceder a sus propiedades y métodos
// textContent es una propiedad que devuelve el contenido de texto del elemento
console.log(elemento.textContent);

// getElementsByClassName devuelve una colección de elementos con la clase especificada
let parrafos = document.getElementsByClassName("parrafo");
// se trata de una colección HTMLCollection, no un array, pero podemos usar for of
for (let parrafo of parrafos) {
  console.log(parrafo.textContent);
}

// getElementsByTagName devuelve una colección de elementos con la etiqueta especificada
let enlaces = document.getElementsByTagName("a");
for (let enlace of enlaces) {
  console.log(enlace.textContent);
}
// da igual donde se encuentre el elemento, se devuelve una colección de todos los elementos presentes en el DOM

// querySelector devuelve el primer elemento que coincide con el selector CSS especificado
let primerParrafo = document.querySelector(".parrafo");
console.log(primerParrafo.textContent);

// querySelectorAll devuelve una colección de elementos que coinciden con el selector CSS especificado
let todosLosParrafos = document.querySelectorAll(".parrafo");
for (let parrafo of todosLosParrafos) {
  console.log(parrafo.textContent);
}