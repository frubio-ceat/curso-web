
// crearemos diversos elementos HTML con el método createElement

let header = document.createElement("h1");
header.textContent = "Hola Mundo";
header.className = "titulo";

let parrafo = document.createElement("p");
parrafo.textContent = "Este es un parrafo creado en JavaScript";
parrafo.className = "parrafo";

let parrafo2 = document.createElement("p");
parrafo2.textContent = "Anotación intermedia";
parrafo2.className = "parrafo";

let parrafo3 = document.createElement("p");
parrafo3.innerHTML = "<strong>Hola mundo!</strong>";
parrafo3.className = "parrafo";
parrafo3.style.color = "red"; // cambiamos el color del texto a rojo

// añadimos los elementos al DOM, directamente al body
// primero el parrafo justo después del primer parrafo
document.body.appendChild(parrafo);
// appendChild añade el elemento al final del padre

// ahora vamos a añadir el header al principio del body con prepend
document.body.prepend(header);
// prepend añade el elemento al principio del padre

// vamos a hacer un insertBefore con el parrafo2
document.body.insertBefore(parrafo2, parrafo);
// insertBefore añade el elemento antes del segundo argumento, que es el elemento de referencia

// también podríamos haber añadido el header buscando el primer hijo del body
document.body.insertBefore(header, document.body.firstChild);
// pero tiene un problema, si el body no tiene hijos, insertBefore no añade nada
// por eso es mejor usar prepend, que añade el elemento al principio del padre

// ahora vamos a sustituir el parrafo que hay en el HTML por el parrafo3, tenía un id 
let parrafoOriginal = document.getElementById("parrafo");
// otra forma de acceder al elemento es con querySelector
// let parrafoOriginal = document.querySelector("#parrafo");
// sustituimos el parrafoOriginal por el parrafo3
document.body.replaceChild(parrafo3, parrafoOriginal);
// replaceChild sustituye el primer argumento por el segundo argumento, que es el elemento de referencia

// Tened cuidado, ya que el elemento es único, si se cambia su posición, se borra de la posición original. No se hace una copia.
//document.body.appendChild(header);
// insertamos el header al final del body, esto lo quita del principio

// si queremos insertar otro header idéntico, tenemos que crear otro elemento o clonarlo
//let header2 = header.cloneNode(true); // true clona el elemento y sus hijos
//document.body.appendChild(header2);
