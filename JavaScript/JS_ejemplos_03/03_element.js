// accedemos primero al elemento
let main = document.getElementById("main-container");

console.log("\nBuscar elementos dentro de un elemento");
// luego buscamos el primer parrafo dentro de ese elemento
let primerParrafo = main.querySelector(".parrafo");
console.log(primerParrafo.textContent);

// luego accedemos a su propiedad children, que devuelve una colección de los elementos hijos
let hijos = main.children;
console.log(hijos); // devuelve una colección de elementos HTMLCollection
// podemos acceder a los elementos de la colección como si fuera un array
console.log(hijos[0]); // devuelve el primer elemento hijo
// que es igual a firstElementChild
console.log(main.firstElementChild); // devuelve el primer elemento hijo
// podemos acceder al último elemento hijo
console.log(hijos[hijos.length - 1]); // devuelve el último elemento hijo
// que es igual a lastElementChild
console.log(main.lastElementChild); // devuelve el último elemento hijo


// podemos acceder a la siguiente información del elemento
console.log("\nAcceder a la información del elemento");
console.log(primerParrafo.id); // id del elemento
console.log(primerParrafo.className); // nombre de la clase del elemento
console.log(primerParrafo.classList); // lista de clases del elemento
console.log(primerParrafo.tagName); // nombre de la etiqueta del elemento
console.log(primerParrafo.textContent); // contenido de texto del elemento
console.log(primerParrafo.innerText); // contenido de texto del elemento, pero solo el visible
console.log(primerParrafo.innerHTML); // contenido HTML del elemento
console.log(primerParrafo.outerHTML);

console.log(primerParrafo.style); // devuelve un objeto CSSStyleDeclaration con las propiedades CSS del elemento
console.log(primerParrafo.style.color); // color del texto del elemento

console.log(primerParrafo.attributes); // devuelve una colección de atributos del elemento
console.log(primerParrafo.hasAttribute("id")); // devuelve true si el elemento tiene el atributo id