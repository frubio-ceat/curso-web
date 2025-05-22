var x = 10;

console.log(window.x); // 10
console.log(x); 

function saludar() {
  console.log("Hola desde la función saludar");
}

window.saludar(); 
console.log(window); // Muestra el objeto window completo

console.log(document.documentElement)
console.log(document.body);