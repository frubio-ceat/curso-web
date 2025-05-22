// En esta situación, suele haber dos problemas:
// 1. Si el DOM no se ha cargado, no se puede acceder a los elementos. Más adelante veremos cómo solucionarlo.
// 2. Si tarda en ejecutarse el script, hace que de que se añada el elemento, se desplace el contenido de la página, causando parpadeos, afectando a la experiencia del usuario y el SEO.

// setTimeout es una función que ejecuta el código después de un tiempo determinado
setTimeout(() => {
  // añadimos un heade al body con prepend
  let header = document.createElement("h1");
  header.textContent = "Hola Mundo";
  header.className = "titulo";
  document.body.prepend(header);
}, 3000);

