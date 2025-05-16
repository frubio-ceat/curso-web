// leo el archivo JSON y lo convierto en un array de objetos
// esta versión está pensada para ejecutarse en Node.js
// y no en el navegador, más adelante veremos cómo hacerlo
const fs = require('fs');
const data = fs.readFileSync('./ejercicioJS_casoReal/datos.json', 'utf-8');
const personas = JSON.parse(data);

// el ejercicio consiste en filtrar el array de objetos
// y mostrar solo aquellos que cumplen con una serie de condiciones

// vamos a filtrar por nombre, apellido y referencia
// tenemos un objeto con nombre apellido y referencia que contiene una cadena sobre la que filtrar
// tendremos que hacer una función que reciba el array de objetos y el objeto de filtro y devolver los objetos que cumplan con el filtro
// el filtrado debe ignorar mayúsculas y minúsculas, es decir, "j" y "J" son lo mismo

// ejemplos de filtros:
const filtro1 = {
  nombre: "j",
};
// devuelve todos los objetos cuyo nombre empiecen por "j" o "J"

const filtro2 = {
  apellidos: "pe",
};
// devuelve todos los objetos cuyo apellido contenga "pe" indistintamente de si es mayúscula o minúscula

const filtro3 = {
  nombre:"L",
  ref: "BM",
  apellido: null
};
// devuelve todos los objetos cuyo nombre empiece por "L" y la referencia empiece por "BM" indistintamente de si es mayúscula o minúscula

// COSAS A TENER EN CUENTA:
// 1. existe una función de strings que comprueba el inicio de una cadena, pero se puede hacer de muchas formas.
// 2. tildes. Si que os recomiendo utilizar chatGPT para que os ayude a quitar las tildes de las letras.
// 3. tened en cuenta que el filtro puede no contener todos los campos, o que algunos de ellos pueden ser la cadena vacía, null o undefined.
// 4. hay que cumplir con todos los filtros, es decir, si el filtro tiene nombre y apellidos, hay que cumplir con los dos.
// 5. la lista a devolver puede ser vacía, es decir, no hay ningún objeto que cumpla con el filtro.
// 6. el filtro puede ser un objeto vacío, en cuyo caso se devolverá el array completo.
// 7. también, si existen multiples filtros, hay una serie de optimizaciones que se pueden hacer
