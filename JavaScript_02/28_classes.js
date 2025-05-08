// Definición de una clase en JavaScript
console.log("\nDefinición de una clase en JavaScript");
class MiClase {};

const objetoClase = new MiClase();
console.log(objetoClase);

objetoClase.propiedad1 = "valor1";
console.log(objetoClase);

// Definición de una clase con método
console.log("\nDefinición de una clase con método");
class MiClase2 {
  metodoSaluda() {
      console.log( "Hola desde la clase 2" );
  }
}

const objetoClase2 = new MiClase2();
objetoClase2.metodoSaluda(); // Llama al método de la clase
//metodoSaluda();

// Definición de una clase con constructor
console.log("\nDefinición de una clase con constructor");
class MiClase3 {
  constructor(parametro1, parametro2) {
      this.propiedad1 = parametro1;
      this.propiedad2 = parametro2;
  }
  metodoSaluda() {
      console.log( "Hola desde la clase 3 al "+ this.propiedad1 );
  }
}
const objetoClase3 = new MiClase3("valor1", "valor2");
console.log(objetoClase3); // Muestra el objeto creado con el constructor
objetoClase3.metodoSaluda(); // Llama al método de la clase
