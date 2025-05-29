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

// Definición de una clase con herencia
console.log("\nDefinición de una clase con herencia");
class MiClasePadre {
  constructor(parametro1) {
      this.propiedad1 = parametro1;
  }
  metodoSaluda() {
      console.log( "Hola desde la clase padre al "+ this.propiedad1 );
  }
}

class MiClaseHija extends MiClasePadre {
  constructor(parametro1, parametro2) {
      super(parametro1); // Llama al constructor de la clase padre
      this.propiedad2 = parametro2;
  }
  // Sobreescribe el método de la clase padre
  metodoSaluda() {
      console.log( "Hola desde la clase hija al "+ this.propiedad1 + " y " + this.propiedad2 );
  }
}

const objetoClaseHija = new MiClaseHija("valor1", "valor2");
console.log(objetoClaseHija); // Muestra el objeto creado con el constructor
objetoClaseHija.metodoSaluda(); // Llama al método de la clase hija

class MiClaseHija2 extends MiClasePadre {
  metodoSaluda2() {
    super.metodoSaluda(); // Llama al método de la clase padre
    console.log( "Hola desde la clase hija 2 al "+ this.propiedad1 ); // la propiedad1 es heredada
  }
}

const objetoClaseHija2 = new MiClaseHija2("valor1");
console.log(objetoClaseHija2); // Muestra el objeto creado con el constructor
objetoClaseHija2.metodoSaluda2(); // Llama al método de la clase hija 2