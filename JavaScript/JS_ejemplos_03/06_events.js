document.getElementById("miBoton").addEventListener("click", () => {
  alert("¡Hola!");
});

let parrafo = document.getElementById("parrafo");
parrafo.addEventListener("click", (event) => {
  console.log("¡Hola desde el parrafo!");
  console.log(event);

  // podemos incluso acceder al elemento que ha lanzado el evento
  console.log(event.target); // devuelve el elemento que ha lanzado el evento
});


document.getElementById("padre").addEventListener("click", function(event) {
  console.log("this:", this); // <div id="padre">
  console.log("event.target:", event.target); // <button>
  console.log("event.currentTarget:", event.currentTarget); // <div id="padre">
});

// si solo necesitamos this, podemos acceder con function(), no necesitamos event
/*
document.getElementById("padre").addEventListener("click", function() {
  console.log("this:", this); // <div id="padre">
});
*/

// si solo necesitamos el event, podemos acceder con () => {}, no necesitamos this
/*
document.getElementById("padre").addEventListener("click", (event) => {
  console.log("event.target:", event.target); // <button>
});
*/